import React from "react"
import { Edition } from "@prisma/client"

import { prisma } from "../../../lib/prisma"

interface EditionShowProps {
  edition: Edition
}

export default function EditionShow({ edition }: EditionShowProps) {
  return (
    <>
      <header>
        <h1>Edition #{edition.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>CreatedAt:</strong> {edition.createdAt}
        </p>
        <p>
          <strong>UpdatedAt:</strong> {edition.updatedAt}
        </p>
        <p>
          <strong>UserId:</strong> {edition.userId}
        </p>
        <p>
          <strong>PdfId:</strong> {edition.pdfId}
        </p>
      </div>
      <footer>
        <a href="/editions" className="secondary-btn">
          Return to editions list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const edition = await prisma.edition.findUnique({
    where: { id: params.id },
  })
  return { props: { edition } }
}
