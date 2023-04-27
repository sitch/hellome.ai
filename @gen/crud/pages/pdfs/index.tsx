import React from "react"
import { PDF } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface PDFIndexProps {
  pdfs: PDF[]
}

export default function PDFIndex({ pdfs }: PDFIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/pdfs/${id}`, { method: "DELETE" }).then(() => {
      alert("PDF deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All PDFs</h1>
        <a href="/pdfs/create" className="secondary-btn">
          + Create new pdf
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Height</div>
          <div className="cell">Width</div>
          <div className="cell">Pages</div>
          <div className="cell">Tags</div>
          <div className="cell">CreatedAt</div>
          <div className="cell">FileId</div>
          <div className="cell">Actions</div>
        </div>
        {pdfs.map((pdf) => (
          <div className="row" key={pdf.id}>
            <div className="cell" data-title="height">
              {pdf.height}
            </div>
            <div className="cell" data-title="width">
              {pdf.width}
            </div>
            <div className="cell" data-title="pages">
              {pdf.pages}
            </div>
            <div className="cell" data-title="tags">
              {pdf.tags}
            </div>
            <div className="cell" data-title="createdAt">
              {pdf.createdAt}
            </div>
            <div className="cell" data-title="fileId">
              {pdf.fileId}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a href={`pdfs/${pdf.id}`} className="secondary-btn small">
                  &#128065; Show
                </a>
                <a href={`pdfs/${pdf.id}/edit`} className="secondary-btn small">
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(pdf.id)}
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
  const pdfs = await prisma.pdf.findMany()
  return { props: { pdfs } }
}
