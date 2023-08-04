// GET get specific bottle
export async function GET(
  request: Request,
  { params }: { params: { bottle_id: string } }
) {
  const bottleId = params.bottle_id // 'a', 'b', or 'c'
  return new Response('you asked for bottleId of ' + bottleId, {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  })
}