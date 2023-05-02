import React from "react"

import { User } from "@prisma/client"

import { prisma } from "../../../lib/prisma"

interface UserShowProps {
  user: User
}

export default function UserShow({ user }: UserShowProps) {
  return (
    <>
      <header>
        <h1>User #{user.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>CreatedAt:</strong> {user.createdAt}
        </p>
        <p>
          <strong>UpdatedAt:</strong> {user.updatedAt}
        </p>
      </div>
      <footer>
        <a href="/users" className="secondary-btn">
          Return to users list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  })
  return { props: { user } }
}
