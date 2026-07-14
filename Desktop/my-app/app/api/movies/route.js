import { NextResponse } from "next/server";

let movies = [
  { id: 1, title: "Harry poter", year: 2014 },
  { id: 2, title: "Spider man", year: 2010 },
];


export async function GET() {
  return NextResponse.json(movies);
}

export async function POST(request) {
  const { title, year } = await request.json();

  const newMovie = {
    id: Date.now(),
    title,
    year,
  };

  movies.push(newMovie);

  return NextResponse.json(newMovie, { status: 201 });
}


export async function DELETE(request) {
  const { id } = await request.json();

  movies = movies.filter((movie) => movie.id !== id);

  return NextResponse.json({
    message: "Фильм удален",
  });
}
