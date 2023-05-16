import React from "react"

import { CloudFile } from "@prisma/client"

import { prisma } from "../../../lib/prisma"

interface CloudFileShowProps {
  cloudfile: CloudFile
}

export default function CloudFileShow({ cloudfile }: CloudFileShowProps) {
  return (
    <>
      <header>
        <h1>CloudFile #{cloudfile.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>Filename:</strong> {cloudfile.filename}
        </p>
        <p>
          <strong>Stem:</strong> {cloudfile.stem}
        </p>
        <p>
          <strong>Extension:</strong> {cloudfile.extension}
        </p>
        <p>
          <strong>Size:</strong> {cloudfile.size}
        </p>
        <p>
          <strong>Mime:</strong> {cloudfile.mime}
        </p>
        <p>
          <strong>ResourceType:</strong> {cloudfile.resourceType}
        </p>
        <p>
          <strong>Metadata:</strong> {cloudfile.metadata}
        </p>
        <p>
          <strong>Key:</strong> {cloudfile.key}
        </p>
        <p>
          <strong>Bucket:</strong> {cloudfile.bucket}
        </p>
        <p>
          <strong>Region:</strong> {cloudfile.region}
        </p>
        <p>
          <strong>PublicUrl:</strong> {cloudfile.publicUrl}
        </p>
        <p>
          <strong>Privacy:</strong> {cloudfile.privacy}
        </p>
        <p>
          <strong>CreatedAt:</strong> {cloudfile.createdAt}
        </p>
        <p>
          <strong>UpdatedAt:</strong> {cloudfile.updatedAt}
        </p>
      </div>
      <footer>
        <a href="/cloudfiles" className="secondary-btn">
          Return to cloudfiles list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const cloudfile = await prisma.cloudfile.findUnique({
    where: { id: params.id },
  })
  return { props: { cloudfile } }
}
