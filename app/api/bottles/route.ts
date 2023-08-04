import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';
 
// GET get all bottles
export async function GET(request: Request) {
  // const cookieStore = cookies()
  // const token = cookieStore.get('token')
 
  return new Response('there are no bottles yet', {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  })
}

// POST create a bottle
export async function POST(request: Request) {
  // console.log(request);
  // Extract the `messages` from the body of the request
  // const { messages } = await request.json();
  const formData: any = await request.formData()
  console.log(formData);
  // FormData {
  //   [Symbol(state)]: [
  //     { name: 'crates', value: '1' },
  //     { name: 'bottle-message', value: 'efefe' }
  //   ]
  // }
  const crateId: number = parseInt(formData.get('crates'));
  console.log("crateId", crateId);
  const bottleMessage: string = formData.get('bottle-message')

  let newBottle = await prisma.bottle.create({ data: { message: bottleMessage, crateId: crateId }  });

  return NextResponse.json({ newBottle })

  
}

// // import { request } from "http";
// 

// export async function POST(request: Request) {
  
//   // const { first, bottleMessage } = await request.body();
//   // const res = await fetch("https://data.mongodb-api.com/...", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     "API-Key": process.env.DATA_API_KEY,
//   //   },
//   //   body: JSON.stringify({ time: new Date().toISOString() }),
//   // });

//   // const data = await res.json();

//   try {
//     const body = await request.json();
//     console.log(body);
//     return new Response("ok");
//   } catch (error) {
//     console.log(error);
//   }

//   // return NextResponse.json(body);
// }
