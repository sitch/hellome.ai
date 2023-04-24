import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function AuthorCreate() {
  const [formState, setFormState] = useState({})
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch('/api/authors', {
      method: 'POST',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('Author created!')
        router.push('/authors')
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create Author</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/authors" className="secondary-btn">
            Return to authors list
          </a>
        </footer>
      </form>
    </>
  )
}
