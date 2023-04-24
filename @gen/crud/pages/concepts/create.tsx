import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function ConceptCreate() {
  const [formState, setFormState] = useState({
    name: '',
    type: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    userId: '',
  })
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch('/api/concepts', {
      method: 'POST',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('Concept created!')
        router.push('/concepts')
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create Concept</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            value={formState.type}
            onChange={(e) =>
              setFormState({ ...formState, type: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={formState.description}
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
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
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/concepts" className="secondary-btn">
            Return to concepts list
          </a>
        </footer>
      </form>
    </>
  )
}
