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
          <strong>Status:</strong> {concept.status}
        </p>
        <p>
          <strong>Description:</strong> {concept.description}
        </p>
        <p>
          <strong>Prompt:</strong> {concept.prompt}
        </p>
        <p>
          <strong>Identifier:</strong> {concept.identifier}
        </p>
        <p>
          <strong>ClassNoun:</strong> {concept.classNoun}
        </p>
        <p>
          <strong>NegativePrompt:</strong> {concept.negativePrompt}
        </p>
        <p>
          <strong>InstancePrompt:</strong> {concept.instancePrompt}
        </p>
        <p>
          <strong>ClassPrompt:</strong> {concept.classPrompt}
        </p>
        <p>
          <strong>PositivePrompts:</strong> {concept.positivePrompts}
        </p>
        <p>
          <strong>NegativePrompts:</strong> {concept.negativePrompts}
        </p>
        <p>
          <strong>CreatedAt:</strong> {concept.createdAt}
        </p>
        <p>
          <strong>UpdatedAt:</strong> {concept.updatedAt}
        </p>
        <p>
          <strong>DreamboothTrainingId:</strong> {concept.dreamboothTrainingId}
        </p>
        <p>
          <strong>DreamboothModelURI:</strong> {concept.dreamboothModelURI}
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
