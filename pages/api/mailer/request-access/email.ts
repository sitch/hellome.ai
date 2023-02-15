import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import sendMail, { transport, verifyTransport } from '@/emails'
import { ComponentMail } from 'mailing-core'

interface EmailPayload {
  firstName?: string
  lastName?: string
  email: string
  message?: string
}

interface EmailSuccessResponse {
  status: 'OK'
}

interface EmailErrorResponse {
  status: 'transport_error' | 'send_error'
  error: any
}

type EmailResponse = EmailSuccessResponse | EmailErrorResponse

function castMailData({
  firstName,
  lastName,
  email,
  message,
}: EmailPayload): ComponentMail {
  return {
    from: {
      name: `${firstName} ${lastName}`,
      address: 'myEmail@gmail.com',
    },
    // replyTo: email,
    to: email,
    // to: 'recipient@gmail.com',
    subject: `Request Access`,
    text: message,
    html: `${message}`,
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailResponse>
) {
  // console.log('request-access/email', req.body)
  // const payload: EmailPayload = JSON.parse(req.body)
  const payload: EmailPayload = req.body

  console.log('request-access/email', payload)

  const mailData = castMailData(payload)

  await verifyTransport().catch((error) => {
    res.status(500).json({ status: 'transport_error', error })
  })

  // await sendMail(mailData)

  await new Promise((resolve, reject) => {
    // send mail
    transport.sendMail(mailData, (error, info) => {
      if (error) {
        console.error(error)

        res.status(500).json({ status: 'send_error', error })
        reject(error)
      } else {
        console.log(info)
        resolve(info)
      }
    })
  })

  res.status(200).json({ status: 'OK' })
}
