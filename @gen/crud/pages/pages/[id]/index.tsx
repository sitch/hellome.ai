import React from 'react'
import { prisma } from '../../../lib/prisma'
import { Page } from '@prisma/client'

interface PageShowProps {
  page: Page
}

export default function PageShow({ page }: PageShowProps) {
  return (
    <>
      <header>
        <h1>Page #{page.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>Status:</strong> {page.status}
        </p>
        <p>
          <strong>Type:</strong> {page.type}
        </p>
        <p>
          <strong>PageNumber:</strong> {page.pageNumber}
        </p>
        <p>
          <strong>CreatedAt:</strong> {page.createdAt}
        </p>
        <p>
          <strong>UpdatedAt:</strong> {page.updatedAt}
        </p>
        <p>
          <strong>StoryId:</strong> {page.storyId}
        </p>
      </div>
      <footer>
        <a href="/pages" className="secondary-btn">
          Return to pages list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const page = await prisma.page.findUnique({
    where: { id: params.id },
  })
  return { props: { page } }
}
