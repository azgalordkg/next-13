'use client';
import {FormEventHandler, useState} from "react";
import {usePosts} from "@/store";

const Search = () => {
  const getPostsBySearch = usePosts(state => state.getPostsBySearch);
  const [search, setSearch] = useState('')
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await getPostsBySearch(search);
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
