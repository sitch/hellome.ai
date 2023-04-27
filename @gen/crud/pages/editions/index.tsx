import React from "react"
import { Edition } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface EditionIndexProps {
  editions: Edition[]
}

export default function EditionIndex({ editions }: EditionIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/editions/${id}`, { method: "DELETE" }).then(() => {
      alert("Edition deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Editions</h1>
        <a href="/editions/create" className="secondary-btn">
          + Create new edition
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">UserId</div>
          <div className="cell">PdfId</div>
          <div className="cell">Actions</div>
        </div>
        {editions.map((edition) => (
          <div className="row" key={edition.id}>
            <div className="cell" data-title="createdAt">
              {edition.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {edition.updatedAt}
            </div>
            <div className="cell" data-title="userId">
              {edition.userId}
            </div>
            <div className="cell" data-title="pdfId">
              {edition.pdfId}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`editions/${edition.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`editions/${edition.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(edition.id)}
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
  const editions = await prisma.edition.findMany()
  return { props: { editions } }
}
