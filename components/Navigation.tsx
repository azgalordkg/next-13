'use client';
import {usePathname} from "next/navigation";
import Link from "next/link";
import {useSession, signOut} from "next-auth/react";

type NavLink = {
  label: string,
  href: string,
}

type Props = {
  navLinks: NavLink[],
}

const Navigation = ({navLinks}: Props) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      {navLinks.map(({href, label}, index) => {
        const isActive = href === pathname;
        return (
          <Link
            key={index}
            className={`${isActive ? 'active' : ''}`}
            href={href}
          >
            {label}
          </Link>
        )
      })}
      {session?.data && (
        <Link href="/profile">Profile</Link>
      )}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({callbackUrl: '/'})}>
          Sign Out
        </Link>
      ) :
      (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </>
  )
}

export {Navigation}
