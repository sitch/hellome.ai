import React from 'react'
import { prisma } from '../../../lib/prisma'
import { PDF } from '@prisma/client'

interface PDFShowProps {
  pdf: PDF
}

export default function PDFShow({ pdf }: PDFShowProps) {
  return (
    <>
      <header>
        <h1>PDF #{pdf.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>Height:</strong> {pdf.height}
        </p>
        <p>
          <strong>Width:</strong> {pdf.width}
        </p>
        <p>
          <strong>Pages:</strong> {pdf.pages}
        </p>
        <p>
          <strong>Tags:</strong> {pdf.tags}
        </p>
        <p>
          <strong>CreatedAt:</strong> {pdf.createdAt}
        </p>
        <p>
          <strong>FileId:</strong> {pdf.fileId}
        </p>
      </div>
      <footer>
        <a href="/pdfs" className="secondary-btn">
          Return to pdfs list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const pdf = await prisma.pdf.findUnique({
    where: { id: params.id },
  })
  return { props: { pdf } }
}
