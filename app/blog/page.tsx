import {Posts} from "@/components/PostsSWR";
import React from "react";
import {Search} from "@/components/SearchSWR";

export default function Blog () {
  return (
    <>
      <h1>Blog Page</h1>
      <Search />
      <Posts />
    </>
  )
}
