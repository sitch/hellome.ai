import dotenv from "dotenv"
import { buildSendMail } from "mailing-core"
import nodemailer from "nodemailer"

import { env } from "~/env.mjs"

// Import env
dotenv.config({ path: ".env.local", override: true })

export const transport = nodemailer.createTransport({
  service: "gmail",
  // host: env.MAILER_HOST,
  // port: env.MAILER_PORT,
  auth: {
    user: env.MAILER_USERNAME,
    pass: env.MAILER_PASSWORD,
  },
  debug: process.env.NODE_ENV === "production",
  logger: process.env.NODE_ENV === "production",
  secure: true,
  // pool: true, // TODO: Not sure if this breaks vercel serverless functions
})

export const verifyTransport = async () => {
  return await new Promise((resolve, reject) => {
    // verify connection configuration
    transport.verify(function (error, success) {
      if (success && !error) {
        console.log("Server is ready to take our messages")
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
  defaultFrom: env.MAILER_DEFAULT_FROM,
  configPath: "./mailing.config.json",
})

export default sendMail
