import React from 'react'
import { prisma } from '../../lib/prisma'
import { Author } from '@prisma/client'

interface AuthorIndexProps {
  authors: Author[]
}

export default function AuthorIndex({ authors }: AuthorIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/authors/${id}`, { method: 'DELETE' }).then(() => {
      alert('Author deleted')
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Authors</h1>
        <a href="/authors/create" className="secondary-btn">
          + Create new author
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Actions</div>
        </div>
        {authors.map((author) => (
          <div className="row" key={author.id}>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`authors/${author.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`authors/${author.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(author.id)}
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
  const authors = await prisma.author.findMany()
  return { props: { authors } }
}
