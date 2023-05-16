import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function AuthorEdit({ author }) {
  const [formState, setFormState] = useState(author)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/authors/${author.id}`, {
      method: "PUT",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("Author updated!")
        router.push(`/authors/${author.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit Author</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <footer>
          <button type="submit" className="primary-btn">
            Update
          </button>
          <a href="/authors" className="secondary-btn">
            Return to authors list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const author = await prisma.author.findUnique({
    where: { id: params.id },
  })
  return { props: { author } }
}
