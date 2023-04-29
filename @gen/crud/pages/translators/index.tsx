import React from "react"

import { Translator } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface TranslatorIndexProps {
  translators: Translator[]
}

export default function TranslatorIndex({ translators }: TranslatorIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/translators/${id}`, { method: "DELETE" }).then(() => {
      alert("Translator deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Translators</h1>
        <a href="/translators/create" className="secondary-btn">
          + Create new translator
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Actions</div>
        </div>
        {translators.map((translator) => (
          <div className="row" key={translator.id}>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`translators/${translator.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`translators/${translator.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(translator.id)}
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
  const translators = await prisma.translator.findMany()
  return { props: { translators } }
}
