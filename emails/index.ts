import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import { buildSendMail } from 'mailing-core'

// Import env
dotenv.config({ path: '.env.local', override: true })

export const transport = nodemailer.createTransport({
  service: 'gmail',
  // host: process.env.MAILER_HOST!,
  // port: process.env.MAILER_PORT!,
  auth: {
    user: process.env.MAILER_USERNAME!,
    pass: process.env.MAILER_PASSWORD!,
  },
  debug: process.env.NODE_ENV === 'production',
  logger: process.env.NODE_ENV === 'production',
  secure: true,
  // pool: true, // TODO: Not sure if this breaks vercel serverless functions
})

export const verifyTransport = async () => {
  return await new Promise((resolve, reject) => {
    // verify connection configuration
    transport.verify(function (error, success) {
      if (success && !error) {
        console.log('Server is ready to take our messages')
        resolve(success)
      } else {
        console.log(error)
        reject(error)
      }
    })
  })
}

const sendMail = buildSendMail({
  transport,
  defaultFrom: process.env.MAILER_DEFAULT_FROM,
  configPath: './mailing.config.json',
})

export default sendMail
