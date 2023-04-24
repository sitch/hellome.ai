import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function PhotoCreate() {
  const [formState, setFormState] = useState({
    height: '',
    width: '',
    tags: '',
    createdAt: '',
    fileId: '',
  })
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch('/api/photos', {
      method: 'POST',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('Photo created!')
        router.push('/photos')
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create Photo</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            value={formState.height}
            onChange={(e) =>
              setFormState({ ...formState, height: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            type="text"
            id="width"
            value={formState.width}
            onChange={(e) =>
              setFormState({ ...formState, width: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            value={formState.tags}
            onChange={(e) =>
              setFormState({ ...formState, tags: e.target.value })
            }
          />
        </div>
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
          <label htmlFor="fileId">FileId:</label>
          <input
            type="text"
            id="fileId"
            value={formState.fileId}
            onChange={(e) =>
              setFormState({ ...formState, fileId: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/photos" className="secondary-btn">
            Return to photos list
          </a>
        </footer>
      </form>
    </>
  )
}
