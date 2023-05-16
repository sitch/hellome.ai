type ErrorDescriptionProps = {
  error?: string | null | undefined
}

export default function ErrorDescription({ error }: ErrorDescriptionProps) {
  if (!error) return null

  return (
    <div className="mx-auto w-full">
      {error && <p className="bold pb-5 text-red-500">{error}</p>}
    </div>
  )
}
