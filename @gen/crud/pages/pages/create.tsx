import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function PageCreate() {
  const [formState, setFormState] = useState({
    status: "",
    type: "",
    pageNumber: "",
    createdAt: "",
    updatedAt: "",
    storyId: "",
  })
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch("/api/pages", {
      method: "POST",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("Page created!")
        router.push("/pages")
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create Page</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            value={formState.status}
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.value })
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
          <label htmlFor="pageNumber">PageNumber:</label>
          <input
            type="text"
            id="pageNumber"
            value={formState.pageNumber}
            onChange={(e) =>
              setFormState({ ...formState, pageNumber: e.target.value })
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
          <label htmlFor="storyId">StoryId:</label>
          <input
            type="text"
            id="storyId"
            value={formState.storyId}
            onChange={(e) =>
              setFormState({ ...formState, storyId: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/pages" className="secondary-btn">
            Return to pages list
          </a>
        </footer>
      </form>
    </>
  )
}
