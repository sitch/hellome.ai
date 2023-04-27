import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function UserCreate() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    updatedAt: "",
    createdAt: "",
  })
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("User created!")
        router.push("/users")
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create User</h1>
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
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
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
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/users" className="secondary-btn">
            Return to users list
          </a>
        </footer>
      </form>
    </>
  )
}
