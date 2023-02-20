import type { NextApiRequest, NextApiResponse } from 'next'
import sendMail, { transport, verifyTransport } from '@/emails'
import Status from 'http-status-codes'
import { castMailData, EmailPayload } from '@/lib/mailer'
import { within } from '@/lib/api/within'
import { BaseApiResponse, EmailResponse } from '@/lib/api'

import vercel from '@/vercel.json'

const MAX_DURATION_MS =
  vercel.functions['pages/api/mailer/request-access/email.ts'].maxDuration *
  1000

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailResponse | BaseApiResponse>
) {
  // if (process.env.NODE_ENV !== 'production') {
  //   return res.status(Status.CREATED).json({ status: 'OK' })
  // }

  if (req.method !== 'POST') {
    return res
      .status(Status.BAD_REQUEST)
      .json({ status: 'request_error', error: 'bad method' })
  }

  const handleSubmission = async () => {
    // console.log('request-access/email', req.body)
    // const payload: EmailPayload = JSON.parse(req.body)
    const payload: EmailPayload = req.body

    console.log('request-access/email', { payload })

    const { ok, data, error } = castMailData(req, payload)
    console.log('request-access/email', { data })

    if (!ok) {
      res
        .status(Status.UNPROCESSABLE_ENTITY)
        .json({ status: 'validation_error', error })

      return
    }

    await verifyTransport().catch((error) => {
      res.status(Status.BAD_REQUEST).json({ status: 'transport_error', error })
    })

    // await sendMail(data)

    await new Promise((resolve, reject) => {
      // send mail
      transport.sendMail(data, (error, info) => {
        if (error) {
          console.error(error)

          res
            .status(Status.INTERNAL_SERVER_ERROR)
            .json({ status: 'send_error', error })
          reject(error)
        } else {
          console.log(info)
          resolve(info)
        }
      })
    })

    res.status(Status.CREATED).json({ status: 'OK' })
  }

  await within<void, EmailResponse>(handleSubmission, res, MAX_DURATION_MS)
}
