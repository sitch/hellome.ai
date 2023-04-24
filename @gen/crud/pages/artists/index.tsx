import React from 'react'
import { prisma } from '../../lib/prisma'
import { Artist } from '@prisma/client'

interface ArtistIndexProps {
  artists: Artist[]
}

export default function ArtistIndex({ artists }: ArtistIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/artists/${id}`, { method: 'DELETE' }).then(() => {
      alert('Artist deleted')
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Artists</h1>
        <a href="/artists/create" className="secondary-btn">
          + Create new artist
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Actions</div>
        </div>
        {artists.map((artist) => (
          <div className="row" key={artist.id}>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`artists/${artist.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`artists/${artist.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(artist.id)}
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
  const artists = await prisma.artist.findMany()
  return { props: { artists } }
}
