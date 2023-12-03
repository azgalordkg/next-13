import {Metadata} from "next";
import Link from "next/link";

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    }
  })
  return await response.json()
}

export const metadata: Metadata = {
  title: 'Blog | Next Page',
}

export default async function Blog () {
  const posts = await getPosts();

  return (
    <>
      <h1>Blog Page</h1>
      <ul className='posts-list'>
        {posts.map(({id, title}: any) => (
          <li className='post' key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
