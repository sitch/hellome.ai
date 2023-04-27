import React from "react"
import { Translator } from "@prisma/client"

import { prisma } from "../../../lib/prisma"

interface TranslatorShowProps {
  translator: Translator
}

export default function TranslatorShow({ translator }: TranslatorShowProps) {
  return (
    <>
      <header>
        <h1>Translator #{translator.id.substr(0, 6)}...</h1>
      </header>
      <div className="card"></div>
      <footer>
        <a href="/translators" className="secondary-btn">
          Return to translators list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const translator = await prisma.translator.findUnique({
    where: { id: params.id },
  })
  return { props: { translator } }
}
