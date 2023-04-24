import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function ArtistEdit({ artist }) {
  const [formState, setFormState] = useState(artist)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/artists/${artist.id}`, {
      method: 'PUT',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('Artist updated!')
        router.push(`/artists/${artist.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit Artist</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <footer>
          <button type="submit" className="primary-btn">
            Update
          </button>
          <a href="/artists" className="secondary-btn">
            Return to artists list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const artist = await prisma.artist.findUnique({
    where: { id: params.id },
  })
  return { props: { artist } }
}
