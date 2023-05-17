import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function StoryCreate() {
  const [formState, setFormState] = useState({
    createdAt: "",
    updatedAt: "",
    artistId: "",
    authorId: "",
  })
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch("/api/storys", {
      method: "POST",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("Story created!")
        router.push("/storys")
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create Story</h1>
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
          <label htmlFor="artistId">ArtistId:</label>
          <input
            type="text"
            id="artistId"
            value={formState.artistId}
            onChange={(e) =>
              setFormState({ ...formState, artistId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="authorId">AuthorId:</label>
          <input
            type="text"
            id="authorId"
            value={formState.authorId}
            onChange={(e) =>
              setFormState({ ...formState, authorId: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/storys" className="secondary-btn">
            Return to storys list
          </a>
        </footer>
      </form>
    </>
  )
}
