import React from 'react'
import { prisma } from '../../../lib/prisma'
import { Story } from '@prisma/client'

interface StoryShowProps {
  story: Story
}

export default function StoryShow({ story }: StoryShowProps) {
  return (
    <>
      <header>
        <h1>Story #{story.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>CreatedAt:</strong> {story.createdAt}
        </p>
        <p>
          <strong>UpdatedAt:</strong> {story.updatedAt}
        </p>
        <p>
          <strong>ArtistId:</strong> {story.artistId}
        </p>
        <p>
          <strong>AuthorId:</strong> {story.authorId}
        </p>
      </div>
      <footer>
        <a href="/storys" className="secondary-btn">
          Return to storys list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const story = await prisma.story.findUnique({
    where: { id: params.id },
  })
  return { props: { story } }
}
