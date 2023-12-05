import {NextResponse} from "next/server";

export async function GET(req: Request) {
  const API_KEY = process.env.OMDB_API_KEY;
  const query = 'matrix';
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
  );

  const result = await movies.json();

  return NextResponse.json(result);
}
