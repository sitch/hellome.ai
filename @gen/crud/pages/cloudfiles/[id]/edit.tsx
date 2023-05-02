import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function CloudFileEdit({ cloudfile }) {
  const [formState, setFormState] = useState(cloudfile)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/cloudfiles/${cloudfile.id}`, {
      method: "PUT",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("CloudFile updated!")
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
          <label htmlFor="stem">Stem:</label>
          <input
            type="text"
            id="stem"
            value={formState.stem}
            onChange={(e) =>
              setFormState({ ...formState, stem: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="extension">Extension:</label>
          <input
            type="text"
            id="extension"
            value={formState.extension}
            onChange={(e) =>
              setFormState({ ...formState, extension: e.target.value })
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
          <label htmlFor="key">Key:</label>
          <input
            type="text"
            id="key"
            value={formState.key}
            onChange={(e) =>
              setFormState({ ...formState, key: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="bucket">Bucket:</label>
          <input
            type="text"
            id="bucket"
            value={formState.bucket}
            onChange={(e) =>
              setFormState({ ...formState, bucket: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="region">Region:</label>
          <input
            type="text"
            id="region"
            value={formState.region}
            onChange={(e) =>
              setFormState({ ...formState, region: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="publicUrl">PublicUrl:</label>
          <input
            type="text"
            id="publicUrl"
            value={formState.publicUrl}
            onChange={(e) =>
              setFormState({ ...formState, publicUrl: e.target.value })
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
