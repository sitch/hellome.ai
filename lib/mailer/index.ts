import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import sendMail, { transport, verifyTransport } from '@/emails'
import { ComponentMail } from 'mailing-core'

export interface EmailPayload {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

export type CastMailData = {
  ok: boolean
  error: any
  data: ComponentMail
}

export function castMailData({
  firstName,
  lastName,
  email,
  message,
}: EmailPayload): CastMailData {
  const ok = (email?.length ?? -1) > 3
  const error = ok ? 'invalid email' : undefined

  const data = {
    from: {
      name: `Sitch`,
      address: 'sitch@hellome.ai',
    },
    // replyTo: email,
    // to: email,
    // to: 'recipient@gmail.com',
    to: 'sitch@hellome.ai',
    subject: `Requesting Access for hellome.ai`,
    text: `${message} ${email}`,
    html: `${message} ${email}`,
  }

  return { ok, error, data }
}
