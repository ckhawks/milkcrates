import prisma from '../../../../lib/prisma'

// DELETE delete specific crate
export async function GET(
  request: Request,
  { params }: { params: { crate_id: string } }
) {
  const crateId = parseInt(params.crate_id)

  const deletedCrate = await prisma.crate.delete({
    where: {
      id: crateId
    }
  })
  
  return new Response(deletedCrate, {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  })
}