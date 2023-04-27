import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function TranslatorCreate() {
  const [formState, setFormState] = useState({})
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch("/api/translators", {
      method: "POST",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("Translator created!")
        router.push("/translators")
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create Translator</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/translators" className="secondary-btn">
            Return to translators list
          </a>
        </footer>
      </form>
    </>
  )
}
