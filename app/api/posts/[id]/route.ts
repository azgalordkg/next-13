import {cookies, headers} from "next/headers";

export async function DELETE (req: Request, {params}: {params: {id: string}}) {
  const {id} = params;

  const headerList = headers();
  const type = headerList.get("content-type");
  if (type !== "application/json") {
    return new Response("Invalid content type", {status: 400});
  }

  const cookieList = cookies();
  const coo2 = cookieList.get("Cookie_2")?.value;

  return new Response(`Deleted post ${id} with cookie ${coo2}`, {status: 200});
}
