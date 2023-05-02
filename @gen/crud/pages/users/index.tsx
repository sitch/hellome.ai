import React from "react"

import { User } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface UserIndexProps {
  users: User[]
}

export default function UserIndex({ users }: UserIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/users/${id}`, { method: "DELETE" }).then(() => {
      alert("User deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Users</h1>
        <a href="/users/create" className="secondary-btn">
          + Create new user
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Name</div>
          <div className="cell">Email</div>
          <div className="cell">CreatedAt</div>
          <div className="cell">UpdatedAt</div>
          <div className="cell">Actions</div>
        </div>
        {users.map((user) => (
          <div className="row" key={user.id}>
            <div className="cell" data-title="name">
              {user.name}
            </div>
            <div className="cell" data-title="email">
              {user.email}
            </div>
            <div className="cell" data-title="createdAt">
              {user.createdAt}
            </div>
            <div className="cell" data-title="updatedAt">
              {user.updatedAt}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a href={`users/${user.id}`} className="secondary-btn small">
                  &#128065; Show
                </a>
                <a
                  href={`users/${user.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(user.id)}
                  className="secondary-btn small danger"
                >
                  &#128465; Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <a href="/" className="secondary-btn">
          Return to Dashboard
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  const users = await prisma.user.findMany()
  return { props: { users } }
}
