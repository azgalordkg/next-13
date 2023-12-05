'use client';
import Link from "next/link";
import {usePosts} from "@/store";
import {shallow} from "zustand/shallow";
import {useEffect} from "react";

const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(state => [
    state.posts,
    state.loading,
    state.getAllPosts,
  ], shallow);

  useEffect(() => {
    void getAllPosts();
  }, [getAllPosts])

  return loading ? (
    <p>Loading...</p>
  ) : (
    <ul className='posts-list'>
      {posts.map(post => (
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
