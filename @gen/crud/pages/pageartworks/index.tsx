import React from 'react'
import { prisma } from '../../lib/prisma'
import { PageArtwork } from '@prisma/client'

interface PageArtworkIndexProps {
  pageartworks: PageArtwork[]
}

export default function PageArtworkIndex({
  pageartworks,
}: PageArtworkIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/pageartworks/${id}`, { method: 'DELETE' }).then(() => {
      alert('PageArtwork deleted')
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All PageArtworks</h1>
        <a href="/pageartworks/create" className="secondary-btn">
          + Create new pageartwork
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Status</div>
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">PageId</div>
          <div className="cell">StoryId</div>
          <div className="cell">ArtistId</div>
          <div className="cell">PhotoId</div>
          <div className="cell">Actions</div>
        </div>
        {pageartworks.map((pageartwork) => (
          <div className="row" key={pageartwork.id}>
            <div className="cell" data-title="status">
              {pageartwork.status}
            </div>
            <div className="cell" data-title="createdAt">
              {pageartwork.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {pageartwork.updatedAt}
            </div>
            <div className="cell" data-title="pageId">
              {pageartwork.pageId}
            </div>
            <div className="cell" data-title="storyId">
              {pageartwork.storyId}
            </div>
            <div className="cell" data-title="artistId">
              {pageartwork.artistId}
            </div>
            <div className="cell" data-title="photoId">
              {pageartwork.photoId}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`pageartworks/${pageartwork.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`pageartworks/${pageartwork.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(pageartwork.id)}
                  className="secondary-btn small danger"
                >
                  &#128465; Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <a href="/" className="secondary-btn">
          Return to Dashboard
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  const pageartworks = await prisma.pageartwork.findMany()
  return { props: { pageartworks } }
}
