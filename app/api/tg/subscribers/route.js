import { subscribers } from '../../../api/tg/data'; 

export async function GET() {
  return new Response(JSON.stringify(subscribers), {
    headers: { 'Content-Type': 'application/json' },
  });
}