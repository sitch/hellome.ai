import { EmailFormData } from './EmailForm'

export interface EmailSuccessProps {
  data: EmailFormData
}

export default function EmailSuccess({ data }: EmailSuccessProps) {
  return (
    <>
      <p className="prose">Thanks for submitting!</p>

      <p>{data.email}</p>
    </>
  )
}
