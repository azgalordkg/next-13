interface Props {
  params: {
    id: string
  }
}

async function getPost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    }
  })
  return await response.json()
}

export async function generateMetadata({params: {id}}: Props) {
  const post = await getPost(id);
  return {
    title: post.title,
  }
}

export default async function Post ({params: {id}}: Props) {
  const post = await getPost(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}
