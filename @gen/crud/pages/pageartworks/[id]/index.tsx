import React from 'react'
import { prisma } from '../../../lib/prisma'
import { PageArtwork } from '@prisma/client'

interface PageArtworkShowProps {
  pageartwork: PageArtwork
}

export default function PageArtworkShow({ pageartwork }: PageArtworkShowProps) {
  return (
    <>
      <header>
        <h1>PageArtwork #{pageartwork.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>Status:</strong> {pageartwork.status}
        </p>
        <p>
          <strong>CreatedAt:</strong> {pageartwork.createdAt}
        </p>
        <p>
          <strong>UpdatedAt:</strong> {pageartwork.updatedAt}
        </p>
        <p>
          <strong>PageId:</strong> {pageartwork.pageId}
        </p>
        <p>
          <strong>StoryId:</strong> {pageartwork.storyId}
        </p>
        <p>
          <strong>ArtistId:</strong> {pageartwork.artistId}
        </p>
        <p>
          <strong>PhotoId:</strong> {pageartwork.photoId}
        </p>
      </div>
      <footer>
        <a href="/pageartworks" className="secondary-btn">
          Return to pageartworks list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const pageartwork = await prisma.pageartwork.findUnique({
    where: { id: params.id },
  })
  return { props: { pageartwork } }
}
