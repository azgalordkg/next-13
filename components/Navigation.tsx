'use client';
import {usePathname} from "next/navigation";
import Link from "next/link";

type NavLink = {
  label: string,
  href: string,
}

type Props = {
  navLinks: NavLink[],
}

const Navigation = ({navLinks}: Props) => {
  const pathname = usePathname();
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
    </>
  )
}

export {Navigation}
