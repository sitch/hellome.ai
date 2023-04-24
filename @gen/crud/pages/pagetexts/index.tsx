import React from 'react'
import { prisma } from '../../lib/prisma'
import { PageText } from '@prisma/client'

interface PageTextIndexProps {
  pagetexts: PageText[]
}

export default function PageTextIndex({ pagetexts }: PageTextIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/pagetexts/${id}`, { method: 'DELETE' }).then(() => {
      alert('PageText deleted')
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All PageTexts</h1>
        <a href="/pagetexts/create" className="secondary-btn">
          + Create new pagetext
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Status</div>
          <div className="cell">Locale</div>
          <div className="cell">Text</div>
          <div className="cell">Type</div>
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">PageId</div>
          <div className="cell">StoryId</div>
          <div className="cell">AuthorId</div>
          <div className="cell">TranslatorId</div>
          <div className="cell">Actions</div>
        </div>
        {pagetexts.map((pagetext) => (
          <div className="row" key={pagetext.id}>
            <div className="cell" data-title="status">
              {pagetext.status}
            </div>
            <div className="cell" data-title="locale">
              {pagetext.locale}
            </div>
            <div className="cell" data-title="text">
              {pagetext.text}
            </div>
            <div className="cell" data-title="type">
              {pagetext.type}
            </div>
            <div className="cell" data-title="createdAt">
              {pagetext.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {pagetext.updatedAt}
            </div>
            <div className="cell" data-title="pageId">
              {pagetext.pageId}
            </div>
            <div className="cell" data-title="storyId">
              {pagetext.storyId}
            </div>
            <div className="cell" data-title="authorId">
              {pagetext.authorId}
            </div>
            <div className="cell" data-title="translatorId">
              {pagetext.translatorId}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`pagetexts/${pagetext.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`pagetexts/${pagetext.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(pagetext.id)}
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
  const pagetexts = await prisma.pagetext.findMany()
  return { props: { pagetexts } }
}
