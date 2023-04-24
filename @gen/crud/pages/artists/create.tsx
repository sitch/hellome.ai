import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function ArtistCreate() {
  const [formState, setFormState] = useState({})
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch('/api/artists', {
      method: 'POST',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('Artist created!')
        router.push('/artists')
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create Artist</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/artists" className="secondary-btn">
            Return to artists list
          </a>
        </footer>
      </form>
    </>
  )
}
