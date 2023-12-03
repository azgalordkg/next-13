import Link from "next/link";

const Header = () => {
  return (
    <header className='header'>
      <Link href='/'>Home</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/about'>About</Link>
    </header>
  )
}

export {Header}
