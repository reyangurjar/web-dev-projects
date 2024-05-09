import { NextResponse } from "next/server";

export async function GET(request, context) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${context.params.query}&number=5`,
    {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }
  );
  // console.log(data)
  const jsonData = await data.json();
  
  // Send the status code with jsonData too
  return NextResponse.json({ status: data.status, ...jsonData });


}
