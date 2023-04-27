import React from "react"
import { Photo } from "@prisma/client"

import { prisma } from "../../../lib/prisma"

interface PhotoShowProps {
  photo: Photo
}

export default function PhotoShow({ photo }: PhotoShowProps) {
  return (
    <>
      <header>
        <h1>Photo #{photo.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>Height:</strong> {photo.height}
        </p>
        <p>
          <strong>Width:</strong> {photo.width}
        </p>
        <p>
          <strong>Tags:</strong> {photo.tags}
        </p>
        <p>
          <strong>CreatedAt:</strong> {photo.createdAt}
        </p>
        <p>
          <strong>FileId:</strong> {photo.fileId}
        </p>
      </div>
      <footer>
        <a href="/photos" className="secondary-btn">
          Return to photos list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const photo = await prisma.photo.findUnique({
    where: { id: params.id },
  })
  return { props: { photo } }
}
