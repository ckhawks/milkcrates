import { cookies } from 'next/headers'
 
// get all bottles
export async function GET(request: Request) {
  // const cookieStore = cookies()
  // const token = cookieStore.get('token')
 
  return new Response('there are no bottles yet', {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  })
}