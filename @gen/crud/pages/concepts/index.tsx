import React from "react"
import { Concept } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface ConceptIndexProps {
  concepts: Concept[]
}

export default function ConceptIndex({ concepts }: ConceptIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/concepts/${id}`, { method: "DELETE" }).then(() => {
      alert("Concept deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Concepts</h1>
        <a href="/concepts/create" className="secondary-btn">
          + Create new concept
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Name</div>
          <div className="cell">Type</div>
          <div className="cell">Description</div>
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">Actions</div>
        </div>
        {concepts.map((concept) => (
          <div className="row" key={concept.id}>
            <div className="cell" data-title="name">
              {concept.name}
            </div>
            <div className="cell" data-title="type">
              {concept.type}
            </div>
            <div className="cell" data-title="description">
              {concept.description}
            </div>
            <div className="cell" data-title="createdAt">
              {concept.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {concept.updatedAt}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`concepts/${concept.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`concepts/${concept.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(concept.id)}
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
  const concepts = await prisma.concept.findMany()
  return { props: { concepts } }
}
