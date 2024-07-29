import { description } from '../../../api/vk/data'; 

export async function GET() {
  return new Response(JSON.stringify(description), {
    headers: { 'Content-Type': 'application/json' },
  });
}