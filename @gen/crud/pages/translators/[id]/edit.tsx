import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function TranslatorEdit({ translator }) {
  const [formState, setFormState] = useState(translator)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/translators/${translator.id}`, {
      method: 'PUT',
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert('Translator updated!')
        router.push(`/translators/${translator.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit Translator</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <footer>
          <button type="submit" className="primary-btn">
            Update
          </button>
          <a href="/translators" className="secondary-btn">
            Return to translators list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const translator = await prisma.translator.findUnique({
    where: { id: params.id },
  })
  return { props: { translator } }
}
