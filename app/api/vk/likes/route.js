import { likes } from '../../../api/vk/data'; 

export async function GET() {
  return new Response(JSON.stringify(likes), {
    headers: { 'Content-Type': 'application/json' },
  });
}