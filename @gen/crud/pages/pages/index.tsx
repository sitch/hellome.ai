import React from "react"

import { Page } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface PageIndexProps {
  pages: Page[]
}

export default function PageIndex({ pages }: PageIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/pages/${id}`, { method: "DELETE" }).then(() => {
      alert("Page deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Pages</h1>
        <a href="/pages/create" className="secondary-btn">
          + Create new page
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Status</div>
          <div className="cell">Type</div>
          <div className="cell">PageNumber</div>
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">StoryId</div>
          <div className="cell">Actions</div>
        </div>
        {pages.map((page) => (
          <div className="row" key={page.id}>
            <div className="cell" data-title="status">
              {page.status}
            </div>
            <div className="cell" data-title="type">
              {page.type}
            </div>
            <div className="cell" data-title="pageNumber">
              {page.pageNumber}
            </div>
            <div className="cell" data-title="createdAt">
              {page.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {page.updatedAt}
            </div>
            <div className="cell" data-title="storyId">
              {page.storyId}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a href={`pages/${page.id}`} className="secondary-btn small">
                  &#128065; Show
                </a>
                <a
                  href={`pages/${page.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(page.id)}
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
  const pages = await prisma.page.findMany()
  return { props: { pages } }
}
