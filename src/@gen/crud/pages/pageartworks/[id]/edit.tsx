import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function PageArtworkEdit({ pageartwork }) {
  const [formState, setFormState] = useState(pageartwork)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/pageartworks/${pageartwork.id}`, {
      method: "PUT",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("PageArtwork updated!")
        router.push(`/pageartworks/${pageartwork.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit PageArtwork</h1>
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
          <label htmlFor="pageId">PageId:</label>
          <input
            type="text"
            id="pageId"
            value={formState.pageId}
            onChange={(e) =>
              setFormState({ ...formState, pageId: e.target.value })
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
          <label htmlFor="photoId">PhotoId:</label>
          <input
            type="text"
            id="photoId"
            value={formState.photoId}
            onChange={(e) =>
              setFormState({ ...formState, photoId: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Update
          </button>
          <a href="/pageartworks" className="secondary-btn">
            Return to pageartworks list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const pageartwork = await prisma.pageartwork.findUnique({
    where: { id: params.id },
  })
  return { props: { pageartwork } }
}
