import React from "react"
import { Author } from "@prisma/client"

import { prisma } from "../../../lib/prisma"

interface AuthorShowProps {
  author: Author
}

export default function AuthorShow({ author }: AuthorShowProps) {
  return (
    <>
      <header>
        <h1>Author #{author.id.substr(0, 6)}...</h1>
      </header>
      <div className="card"></div>
      <footer>
        <a href="/authors" className="secondary-btn">
          Return to authors list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const author = await prisma.author.findUnique({
    where: { id: params.id },
  })
  return { props: { author } }
}
