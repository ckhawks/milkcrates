// import { request } from "http";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log(request);
  // Extract the `messages` from the body of the request
  // const { messages } = await request.json();
  const formData = await request.formData()
  const name = formData.get('first')
  const bottleMessage = formData.get('bottle-message')
  return NextResponse.json({ name, bottleMessage })
  // const { first, bottleMessage } = await request.body();
  // const res = await fetch("https://data.mongodb-api.com/...", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY,
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // });

  // const data = await res.json();

  try {
    const body = await request.json();
    console.log(body);
    return new Response("ok");
  } catch (error) {
    console.log(error);
  }

  // return NextResponse.json(body);
}
