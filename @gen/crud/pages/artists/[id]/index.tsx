import React from 'react'
import { prisma } from '../../../lib/prisma'
import { Artist } from '@prisma/client'

interface ArtistShowProps {
  artist: Artist
}

export default function ArtistShow({ artist }: ArtistShowProps) {
  return (
    <>
      <header>
        <h1>Artist #{artist.id.substr(0, 6)}...</h1>
      </header>
      <div className="card"></div>
      <footer>
        <a href="/artists" className="secondary-btn">
          Return to artists list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const artist = await prisma.artist.findUnique({
    where: { id: params.id },
  })
  return { props: { artist } }
}
