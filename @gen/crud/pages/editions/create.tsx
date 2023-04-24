import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function EditionCreate() {
  const [formState, setFormState] = useState({
    createdAt: '',
    updatedAt: '',
    userId: '',
    pdfId: '',
  })
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch('/api/editions', {
      method: 'POST',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('Edition created!')
        router.push('/editions')
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create Edition</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="createdAt">CreatedAt:</label>
          <input
            type="text"
            id="createdAt"
            value={formState.createdAt}
            onChange={(e) =>
              setFormState({ ...formState, createdAt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="updatedAt">UpdatedAt:</label>
          <input
            type="text"
            id="updatedAt"
            value={formState.updatedAt}
            onChange={(e) =>
              setFormState({ ...formState, updatedAt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="userId">UserId:</label>
          <input
            type="text"
            id="userId"
            value={formState.userId}
            onChange={(e) =>
              setFormState({ ...formState, userId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="pdfId">PdfId:</label>
          <input
            type="text"
            id="pdfId"
            value={formState.pdfId}
            onChange={(e) =>
              setFormState({ ...formState, pdfId: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/editions" className="secondary-btn">
            Return to editions list
          </a>
        </footer>
      </form>
    </>
  )
}
