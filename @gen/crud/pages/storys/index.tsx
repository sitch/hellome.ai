import React from 'react'
import { prisma } from '../../lib/prisma'
import { Story } from '@prisma/client'

interface StoryIndexProps {
  storys: Story[]
}

export default function StoryIndex({ storys }: StoryIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/storys/${id}`, { method: 'DELETE' }).then(() => {
      alert('Story deleted')
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Storys</h1>
        <a href="/storys/create" className="secondary-btn">
          + Create new story
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">ArtistId</div>
          <div className="cell">AuthorId</div>
          <div className="cell">Actions</div>
        </div>
        {storys.map((story) => (
          <div className="row" key={story.id}>
            <div className="cell" data-title="createdAt">
              {story.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {story.updatedAt}
            </div>
            <div className="cell" data-title="artistId">
              {story.artistId}
            </div>
            <div className="cell" data-title="authorId">
              {story.authorId}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a href={`storys/${story.id}`} className="secondary-btn small">
                  &#128065; Show
                </a>
                <a
                  href={`storys/${story.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(story.id)}
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
  const storys = await prisma.story.findMany()
  return { props: { storys } }
}
