import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import type Mail from 'nodemailer/lib/mailer'

interface EmailPayload {
  // from: {
  //   name: string
  //   address: string
  // }
  // replyTo: string
  // to: string
  // subject: string
  // text: string
  // html: string

  firstName: string
  lastName: string
  email: string
  message: string
}

interface EmailSuccessResponse {
  status: 'OK'
}

interface EmailErrorResponse {
  status: 'error'
  error: {
    // error_code: number
    message: string
  }
}

type EmailResponse = EmailSuccessResponse | EmailErrorResponse

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailResponse>
) {
  const { firstName, lastName, email, message }: EmailPayload = JSON.parse(
    req.body
  )

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'myEmail@gmail.com',
      pass: 'password',
    },
    secure: true,
  })

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('Server is ready to take our messages')
        resolve(success)
      }
    })
  })

  const mailData: Mail.Options = {
    from: {
      name: `${firstName} ${lastName}`,
      address: 'myEmail@gmail.com',
    },
    replyTo: email,
    to: 'recipient@gmail.com',
    subject: `form message`,
    text: message,
    html: `${message}`,
  }

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        console.log(info)
        resolve(info)
      }
    })
  })

  res.status(200).json({ status: 'OK' })
}
