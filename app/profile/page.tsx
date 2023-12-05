'use client';
import {useSession} from "next-auth/react";

export default function Profile() {
  const session = useSession();

  return (
    <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
      <h1 style={{ marginBottom: '40px' }}>Profile of {session?.data?.user?.name}</h1>
      {session?.data?.user?.image && (
        <img src={session?.data?.user?.image} alt={session?.data?.user?.name!} />
      )}
    </div>
  )
}
