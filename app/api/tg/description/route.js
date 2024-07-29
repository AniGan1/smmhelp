import { description } from '../../../api/tg/data'; 

export async function GET() {
  return new Response(JSON.stringify(description), {
    headers: { 'Content-Type': 'application/json' },
  });
}