import { subscribers } from '../../../api/vk/data'; 

export async function GET() {
  return new Response(JSON.stringify(subscribers), {
    headers: { 'Content-Type': 'application/json' },
  });
}