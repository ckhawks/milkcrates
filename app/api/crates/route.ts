import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

// POST create a crate
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
  const crateName: string = formData.get('name')
  // const bottleMessage = formData.get('bottle-message')

  const newCrate = await prisma.crate.create(
    { 
      data: { 
        name: crateName 
      }  
    }
  );

  return NextResponse.json({ newCrate })

  
}