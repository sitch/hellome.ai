import React from "react"

import { Photo } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface PhotoIndexProps {
  photos: Photo[]
}

export default function PhotoIndex({ photos }: PhotoIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/photos/${id}`, { method: "DELETE" }).then(() => {
      alert("Photo deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Photos</h1>
        <a href="/photos/create" className="secondary-btn">
          + Create new photo
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Height</div>
          <div className="cell">Width</div>
          <div className="cell">Tags</div>
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">FileId</div>
          <div className="cell">Actions</div>
        </div>
        {photos.map((photo) => (
          <div className="row" key={photo.id}>
            <div className="cell" data-title="height">
              {photo.height}
            </div>
            <div className="cell" data-title="width">
              {photo.width}
            </div>
            <div className="cell" data-title="tags">
              {photo.tags}
            </div>
            <div className="cell" data-title="createdAt">
              {photo.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {photo.updatedAt}
            </div>
            <div className="cell" data-title="fileId">
              {photo.fileId}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a href={`photos/${photo.id}`} className="secondary-btn small">
                  &#128065; Show
                </a>
                <a
                  href={`photos/${photo.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(photo.id)}
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
  const photos = await prisma.photo.findMany()
  return { props: { photos } }
}
