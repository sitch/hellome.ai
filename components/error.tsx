type Props = {
  error?: string | null | undefined
}

export default function ErrorMessage({ error }: Props) {
  if (!error) return null

  return (
    <div className="mx-auto w-full">
      {error && <p className="bold pb-5 text-red-500">{error}</p>}
    </div>
  )
}
