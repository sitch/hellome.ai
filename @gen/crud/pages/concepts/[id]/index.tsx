import React from "react"
import { Concept } from "@prisma/client"

import { prisma } from "../../../lib/prisma"

interface ConceptShowProps {
  concept: Concept
}

export default function ConceptShow({ concept }: ConceptShowProps) {
  return (
    <>
      <header>
        <h1>Concept #{concept.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>Name:</strong> {concept.name}
        </p>
        <p>
          <strong>Type:</strong> {concept.type}
        </p>
        <p>
          <strong>Description:</strong> {concept.description}
        </p>
        <p>
          <strong>CreatedAt:</strong> {concept.createdAt}
        </p>
        <p>
          <strong>UpdatedAt:</strong> {concept.updatedAt}
        </p>
      </div>
      <footer>
        <a href="/concepts" className="secondary-btn">
          Return to concepts list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const concept = await prisma.concept.findUnique({
    where: { id: params.id },
  })
  return { props: { concept } }
}
