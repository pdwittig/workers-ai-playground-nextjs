import { StreamingTextResponse } from 'ai';
import { Ai } from '@cloudflare/ai';
import { WorkersAiStream } from '../../lib/WorkersAiStream';

export const runtime = 'edge';
// This is required to enable streaming
export const dynamic = 'force-dynamic';

export async function POST(request) {
  const ai = new Ai(process.env.AI);
  const { prompt, model, maxTokens } = await request.json();

  const res = await ai.run(model, {
    prompt,
    max_tokens: maxTokens,
    stream: true,
  });

  const stream = WorkersAiStream(res);
  return new StreamingTextResponse(stream);
}