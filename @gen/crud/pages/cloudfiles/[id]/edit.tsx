import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function CloudFileEdit({ cloudfile }) {
  const [formState, setFormState] = useState(cloudfile)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/cloudfiles/${cloudfile.id}`, {
      method: 'PUT',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('CloudFile updated!')
        router.push(`/cloudfiles/${cloudfile.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit CloudFile</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="resourceType">ResourceType:</label>
          <input
            type="text"
            id="resourceType"
            value={formState.resourceType}
            onChange={(e) =>
              setFormState({ ...formState, resourceType: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="filename">Filename:</label>
          <input
            type="text"
            id="filename"
            value={formState.filename}
            onChange={(e) =>
              setFormState({ ...formState, filename: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="size">Size:</label>
          <input
            type="text"
            id="size"
            value={formState.size}
            onChange={(e) =>
              setFormState({ ...formState, size: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="ext">Ext:</label>
          <input
            type="text"
            id="ext"
            value={formState.ext}
            onChange={(e) =>
              setFormState({ ...formState, ext: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="mime">Mime:</label>
          <input
            type="text"
            id="mime"
            value={formState.mime}
            onChange={(e) =>
              setFormState({ ...formState, mime: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="metadata">Metadata:</label>
          <input
            type="text"
            id="metadata"
            value={formState.metadata}
            onChange={(e) =>
              setFormState({ ...formState, metadata: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="path">Path:</label>
          <input
            type="text"
            id="path"
            value={formState.path}
            onChange={(e) =>
              setFormState({ ...formState, path: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="signature">Signature:</label>
          <input
            type="text"
            id="signature"
            value={formState.signature}
            onChange={(e) =>
              setFormState({ ...formState, signature: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="privacy">Privacy:</label>
          <input
            type="text"
            id="privacy"
            value={formState.privacy}
            onChange={(e) =>
              setFormState({ ...formState, privacy: e.target.value })
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
          <a href="/cloudfiles" className="secondary-btn">
            Return to cloudfiles list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const cloudfile = await prisma.cloudfile.findUnique({
    where: { id: params.id },
  })
  return { props: { cloudfile } }
}
