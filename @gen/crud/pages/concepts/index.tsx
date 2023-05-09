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
          <div className="cell">Status</div>
          <div className="cell">Description</div>
          <div className="cell">Prompt</div>
          <div className="cell">Identifier</div>
          <div className="cell">ClassNoun</div>
          <div className="cell">NegativePrompt</div>
          <div className="cell">InstancePrompt</div>
          <div className="cell">ClassPrompt</div>
          <div className="cell">PositivePrompts</div>
          <div className="cell">NegativePrompts</div>
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">DreamboothTrainingId</div>
          <div className="cell">DreamboothModelURI</div>
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
            <div className="cell" data-title="status">
              {concept.status}
            </div>
            <div className="cell" data-title="description">
              {concept.description}
            </div>
            <div className="cell" data-title="prompt">
              {concept.prompt}
            </div>
            <div className="cell" data-title="identifier">
              {concept.identifier}
            </div>
            <div className="cell" data-title="classNoun">
              {concept.classNoun}
            </div>
            <div className="cell" data-title="negativePrompt">
              {concept.negativePrompt}
            </div>
            <div className="cell" data-title="instancePrompt">
              {concept.instancePrompt}
            </div>
            <div className="cell" data-title="classPrompt">
              {concept.classPrompt}
            </div>
            <div className="cell" data-title="positivePrompts">
              {concept.positivePrompts}
            </div>
            <div className="cell" data-title="negativePrompts">
              {concept.negativePrompts}
            </div>
            <div className="cell" data-title="createdAt">
              {concept.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {concept.updatedAt}
            </div>
            <div className="cell" data-title="dreamboothTrainingId">
              {concept.dreamboothTrainingId}
            </div>
            <div className="cell" data-title="dreamboothModelURI">
              {concept.dreamboothModelURI}
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
