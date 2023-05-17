import React from "react"

import { CloudFile } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface CloudFileIndexProps {
  cloudfiles: CloudFile[]
}

export default function CloudFileIndex({ cloudfiles }: CloudFileIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/cloudfiles/${id}`, { method: "DELETE" }).then(() => {
      alert("CloudFile deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All CloudFiles</h1>
        <a href="/cloudfiles/create" className="secondary-btn">
          + Create new cloudfile
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Filename</div>
          <div className="cell">Stem</div>
          <div className="cell">Extension</div>
          <div className="cell">Size</div>
          <div className="cell">Mime</div>
          <div className="cell">ResourceType</div>
          <div className="cell">Metadata</div>
          <div className="cell">Key</div>
          <div className="cell">Bucket</div>
          <div className="cell">Region</div>
          <div className="cell">PublicUrl</div>
          <div className="cell">Privacy</div>
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">Actions</div>
        </div>
        {cloudfiles.map((cloudfile) => (
          <div className="row" key={cloudfile.id}>
            <div className="cell" data-title="filename">
              {cloudfile.filename}
            </div>
            <div className="cell" data-title="stem">
              {cloudfile.stem}
            </div>
            <div className="cell" data-title="extension">
              {cloudfile.extension}
            </div>
            <div className="cell" data-title="size">
              {cloudfile.size}
            </div>
            <div className="cell" data-title="mime">
              {cloudfile.mime}
            </div>
            <div className="cell" data-title="resourceType">
              {cloudfile.resourceType}
            </div>
            <div className="cell" data-title="metadata">
              {cloudfile.metadata}
            </div>
            <div className="cell" data-title="key">
              {cloudfile.key}
            </div>
            <div className="cell" data-title="bucket">
              {cloudfile.bucket}
            </div>
            <div className="cell" data-title="region">
              {cloudfile.region}
            </div>
            <div className="cell" data-title="publicUrl">
              {cloudfile.publicUrl}
            </div>
            <div className="cell" data-title="privacy">
              {cloudfile.privacy}
            </div>
            <div className="cell" data-title="createdAt">
              {cloudfile.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {cloudfile.updatedAt}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`cloudfiles/${cloudfile.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`cloudfiles/${cloudfile.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(cloudfile.id)}
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
  const cloudfiles = await prisma.cloudfile.findMany()
  return { props: { cloudfiles } }
}
