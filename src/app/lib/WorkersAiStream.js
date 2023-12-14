import {
  StreamingTextResponse,
  createCallbacksTransformer,
  createStreamDataTransformer,
 } from 'ai';


async function readAndProcessLines(
  reader,
  controller,
) {
  let segment = '';
  const decoder = new TextDecoder();

  while (true) {
    const { value: chunk, done } = await reader.read();

    if (done) break;

    segment = decoder.decode(chunk, { stream: true });

    const lines = segment
      .toString()
      .split('\n')
      .filter((line) => line.trim() !== '');

    for (const line of lines)   {
      const message = line.replace(/^data: /, '');
      
      if (message === '[DONE]') {
        controller.close();
        return;
      }

      try {
        const { response } = JSON.parse(message);
        controller.enqueue(response);
      } catch (error) {
        console.error('Could not JSON parse stream message', message, error);
      }
    }
  }
}

function createParser(res) {
  const reader = res.getReader();

  return new ReadableStream({
    async start(controller) {  
      if (!reader) {
        controller.close();
        return;
      }

      await readAndProcessLines(reader, controller);
    },
  });
}

export function WorkersAiStream(res) {
  return createParser(res)
    .pipeThrough(createCallbacksTransformer())
    .pipeThrough(createStreamDataTransformer());
}