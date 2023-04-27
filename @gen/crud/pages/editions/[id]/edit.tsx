import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function EditionEdit({ edition }) {
  const [formState, setFormState] = useState(edition)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/editions/${edition.id}`, {
      method: "PUT",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("Edition updated!")
        router.push(`/editions/${edition.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit Edition</h1>
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
            Update
          </button>
          <a href="/editions" className="secondary-btn">
            Return to editions list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const edition = await prisma.edition.findUnique({
    where: { id: params.id },
  })
  return { props: { edition } }
}
