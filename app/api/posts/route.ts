import {NextResponse} from "next/server";
import {posts} from "./posts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");

  let currentPosts = [...posts];

  if (query) {
    currentPosts = currentPosts.filter(post => {
      return post.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  return NextResponse.json(currentPosts);
}

export async function POST(request: Request) {
  const body = await request.json();
  // const newPost = {
  //   id: posts.length + 1,
  //   title: body.title,
  //   content: body.content
  // };
  //
  // posts.push(newPost);
  // return NextResponse.redirect("/api/posts");
}
