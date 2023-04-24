import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function StoryEdit({ story }) {
  const [formState, setFormState] = useState(story)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/storys/${story.id}`, {
      method: 'PUT',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('Story updated!')
        router.push(`/storys/${story.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit Story</h1>
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
            Update
          </button>
          <a href="/storys" className="secondary-btn">
            Return to storys list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const story = await prisma.story.findUnique({
    where: { id: params.id },
  })
  return { props: { story } }
}
