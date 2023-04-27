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
          <strong>ResourceType:</strong> {cloudfile.resourceType}
        </p>
        <p>
          <strong>Filename:</strong> {cloudfile.filename}
        </p>
        <p>
          <strong>Size:</strong> {cloudfile.size}
        </p>
        <p>
          <strong>Ext:</strong> {cloudfile.ext}
        </p>
        <p>
          <strong>Mime:</strong> {cloudfile.mime}
        </p>
        <p>
          <strong>Metadata:</strong> {cloudfile.metadata}
        </p>
        <p>
          <strong>Path:</strong> {cloudfile.path}
        </p>
        <p>
          <strong>Signature:</strong> {cloudfile.signature}
        </p>
        <p>
          <strong>Privacy:</strong> {cloudfile.privacy}
        </p>
        <p>
          <strong>CreatedAt:</strong> {cloudfile.createdAt}
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
