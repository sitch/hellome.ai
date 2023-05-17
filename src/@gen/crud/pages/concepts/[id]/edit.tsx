import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function ConceptEdit({ concept }) {
  const [formState, setFormState] = useState(concept)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/concepts/${concept.id}`, {
      method: "PUT",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("Concept updated!")
        router.push(`/concepts/${concept.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit Concept</h1>
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
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            value={formState.type}
            onChange={(e) =>
              setFormState({ ...formState, type: e.target.value })
            }
          />
        </div>
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
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={formState.description}
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="prompt">Prompt:</label>
          <input
            type="text"
            id="prompt"
            value={formState.prompt}
            onChange={(e) =>
              setFormState({ ...formState, prompt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="identifier">Identifier:</label>
          <input
            type="text"
            id="identifier"
            value={formState.identifier}
            onChange={(e) =>
              setFormState({ ...formState, identifier: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="classNoun">ClassNoun:</label>
          <input
            type="text"
            id="classNoun"
            value={formState.classNoun}
            onChange={(e) =>
              setFormState({ ...formState, classNoun: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="negativePrompt">NegativePrompt:</label>
          <input
            type="text"
            id="negativePrompt"
            value={formState.negativePrompt}
            onChange={(e) =>
              setFormState({ ...formState, negativePrompt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="instancePrompt">InstancePrompt:</label>
          <input
            type="text"
            id="instancePrompt"
            value={formState.instancePrompt}
            onChange={(e) =>
              setFormState({ ...formState, instancePrompt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="classPrompt">ClassPrompt:</label>
          <input
            type="text"
            id="classPrompt"
            value={formState.classPrompt}
            onChange={(e) =>
              setFormState({ ...formState, classPrompt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="positivePrompts">PositivePrompts:</label>
          <input
            type="text"
            id="positivePrompts"
            value={formState.positivePrompts}
            onChange={(e) =>
              setFormState({ ...formState, positivePrompts: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="negativePrompts">NegativePrompts:</label>
          <input
            type="text"
            id="negativePrompts"
            value={formState.negativePrompts}
            onChange={(e) =>
              setFormState({ ...formState, negativePrompts: e.target.value })
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
          <label htmlFor="dreamboothTrainingId">DreamboothTrainingId:</label>
          <input
            type="text"
            id="dreamboothTrainingId"
            value={formState.dreamboothTrainingId}
            onChange={(e) =>
              setFormState({
                ...formState,
                dreamboothTrainingId: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="dreamboothModelURI">DreamboothModelURI:</label>
          <input
            type="text"
            id="dreamboothModelURI"
            value={formState.dreamboothModelURI}
            onChange={(e) =>
              setFormState({ ...formState, dreamboothModelURI: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Update
          </button>
          <a href="/concepts" className="secondary-btn">
            Return to concepts list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const concept = await prisma.concept.findUnique({
    where: { id: params.id },
  })
  return { props: { concept } }
}
