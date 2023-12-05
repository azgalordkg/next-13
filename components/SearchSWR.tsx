'use client';
import {FormEventHandler, useState} from "react";
import useSWR from "swr";
import {getPostsBySearch} from "@/services/getPosts";

const Search = () => {
  const {mutate} = useSWR('posts');
  const [search, setSearch] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const posts = await getPostsBySearch(search);
    await mutate(posts);
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        type="search"
        placeholder='search'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export {Search}
