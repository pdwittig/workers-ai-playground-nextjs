import { StreamingTextResponse } from 'ai';
import { Ai } from '@cloudflare/ai';
import { WorkersAiStream } from '../../lib/WorkersAiStream';
import { BaselimeLogger } from "@baselime/edge-logger"


export const runtime = 'edge';
// This is required to enable streaming
export const dynamic = 'force-dynamic';

export async function POST(request, context) {
  const ai = new Ai(process.env.AI);
  const { prompt, model, maxTokens } = await request.json();

  // log({ promp, model, maxTokens }, context);
  
  const res = await ai.run(model, {
    prompt,
    max_tokens: maxTokens,
    stream: true,
  });


  const stream = WorkersAiStream(res);
  return new StreamingTextResponse(stream);
}


const log = (data, context) => {
  const logger = new BaselimeLogger({
    service: "playground",
    namespace: context.request.url,
    apiKey: context.env.BASELIME_API_KEY,
    ctx: context,
    isLocalDev: context.env.IS_LOCAL,
  });

  logger.info("LLM inference", { data });
  context.waitUntil(logger.flush());
}