import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function UserEdit({ user }) {
  const [formState, setFormState] = useState(user)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('User updated!')
        router.push(`/users/${user.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit User</h1>
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
            Update
          </button>
          <a href="/users" className="secondary-btn">
            Return to users list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  })
  return { props: { user } }
}
