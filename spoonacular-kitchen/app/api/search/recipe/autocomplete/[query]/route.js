import { NextResponse } from "next/server";

export async function GET(request, context) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/autocomplete?number=5&query=${context.params.query}`,
    {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }
  );
  const jsonData = await data.json();

  return NextResponse.json(jsonData);
}

