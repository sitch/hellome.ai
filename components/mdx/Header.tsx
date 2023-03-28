import Image from 'next/image'
import { useState, useEffect, JSXElementConstructor } from 'react'
import Link from 'next/link'

export type HeaderProps = {
  HeroComp: JSXElementConstructor<{}>
}

const Header = ({ HeroComp }: HeaderProps) => {
  // const [width, setWidth] = useState(0)
  // if (typeof window !== 'undefined') {
  //   useEffect(() => {
  //     setWidth(window.innerWidth)
  //   }, [window.innerWidth])
  // }
  return (
    <header>
      {/* <nav>
        <Link legacyBehavior href="/" passHref>
          <a>
            <Image src="/logo.png" alt="img-logo" width="211" height="60" />
          </a>
        </Link>
        <Link legacyBehavior href="/" passHref>
          <a>
            <Image
              src="/logo2.png"
              alt="img-logo-mobile"
              width="60"
              height="60"
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/shivammodiin/nextvita"
              aria-label="NextVita-Github"
              target="_blank"
              rel="noopener"
            >
              GitHub ↗
            </a>
          </li>
          <li>
            <Link legacyBehavior href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav> */}
      {HeroComp && <HeroComp />}
    </header>
  )
}

export default Header
