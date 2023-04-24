import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function PageTextCreate() {
  const [formState, setFormState] = useState({
    status: '',
    locale: '',
    text: '',
    type: '',
    createdAt: '',
    updatedAt: '',
    pageId: '',
    storyId: '',
    authorId: '',
    translatorId: '',
  })
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch('/api/pagetexts', {
      method: 'POST',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('PageText created!')
        router.push('/pagetexts')
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create PageText</h1>
      </header>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="locale">Locale:</label>
          <input
            type="text"
            id="locale"
            value={formState.locale}
            onChange={(e) =>
              setFormState({ ...formState, locale: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="text">Text:</label>
          <input
            type="text"
            id="text"
            value={formState.text}
            onChange={(e) =>
              setFormState({ ...formState, text: e.target.value })
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
          <label htmlFor="pageId">PageId:</label>
          <input
            type="text"
            id="pageId"
            value={formState.pageId}
            onChange={(e) =>
              setFormState({ ...formState, pageId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="storyId">StoryId:</label>
          <input
            type="text"
            id="storyId"
            value={formState.storyId}
            onChange={(e) =>
              setFormState({ ...formState, storyId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="authorId">AuthorId:</label>
          <input
            type="text"
            id="authorId"
            value={formState.authorId}
            onChange={(e) =>
              setFormState({ ...formState, authorId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="translatorId">TranslatorId:</label>
          <input
            type="text"
            id="translatorId"
            value={formState.translatorId}
            onChange={(e) =>
              setFormState({ ...formState, translatorId: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/pagetexts" className="secondary-btn">
            Return to pagetexts list
          </a>
        </footer>
      </form>
    </>
  )
}
