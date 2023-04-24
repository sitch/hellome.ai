import React from 'react'
import { prisma } from '../../../lib/prisma'
import { PageText } from '@prisma/client'

interface PageTextShowProps {
  pagetext: PageText
}

export default function PageTextShow({ pagetext }: PageTextShowProps) {
  return (
    <>
      <header>
        <h1>PageText #{pagetext.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>Status:</strong> {pagetext.status}
        </p>
        <p>
          <strong>Locale:</strong> {pagetext.locale}
        </p>
        <p>
          <strong>Text:</strong> {pagetext.text}
        </p>
        <p>
          <strong>Type:</strong> {pagetext.type}
        </p>
        <p>
          <strong>CreatedAt:</strong> {pagetext.createdAt}
        </p>
        <p>
          <strong>UpdatedAt:</strong> {pagetext.updatedAt}
        </p>
        <p>
          <strong>PageId:</strong> {pagetext.pageId}
        </p>
        <p>
          <strong>StoryId:</strong> {pagetext.storyId}
        </p>
        <p>
          <strong>AuthorId:</strong> {pagetext.authorId}
        </p>
        <p>
          <strong>TranslatorId:</strong> {pagetext.translatorId}
        </p>
      </div>
      <footer>
        <a href="/pagetexts" className="secondary-btn">
          Return to pagetexts list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const pagetext = await prisma.pagetext.findUnique({
    where: { id: params.id },
  })
  return { props: { pagetext } }
}
