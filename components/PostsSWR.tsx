'use client';
import Link from "next/link";
import useSWR from "swr";
import {getAllPosts} from "@/services/getPosts";

const Posts = () => {
  const {data, isLoading} = useSWR<any[]>('posts', getAllPosts);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul className='posts-list'>
      {data?.map(post => (
        <li className='post' key={post.id}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export {Posts}
