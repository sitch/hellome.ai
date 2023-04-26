import { FormEventHandler, useEffect, useState } from "react"

type Props = {
  initialPrompt?: string
  onSubmit: FormEventHandler<HTMLFormElement>
  scribbleExists?: boolean
  isProcessing?: boolean
}

export default function PromptForm({
  initialPrompt = "",
  onSubmit,
  scribbleExists = false,
  isProcessing = false,
}: Props) {
  const [prompt, setPrompt] = useState(initialPrompt)

  const disabled = !(scribbleExists && prompt.length > 0)

  useEffect(() => {
    setPrompt(initialPrompt)
  }, [initialPrompt])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <form onSubmit={handleSubmit} className="animate-in fade-in duration-700">
      <div className="mt-4 flex">
        <input
          id="prompt-input"
          type="text"
          name="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to create..."
          className="block w-full grow rounded-l-md"
        />

        <button
          className={`text-small inline-block flex-none rounded-r-md bg-black px-5 py-3 text-white ${
            disabled ? "cursor-not-allowed opacity-20	" : ""
          }`}
          type="submit"
          disabled={disabled}
        >
          Go
        </button>
      </div>
    </form>
  )
}
