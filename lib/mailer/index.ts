import type { NextApiRequest } from 'next'
import { ComponentMail } from 'mailing-core'
import requestIp from 'request-ip'
import { Lookup, lookup } from 'geoip-country'

// import sendMail, { transport, verifyTransport } from '@/emails'

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

export function castGeo(ip: string) {
  return lookup(ip) as Lookup
}

export function castMailData(
  req: NextApiRequest,
  { firstName, lastName, email, message }: EmailPayload
): CastMailData {
  const ok = (email?.length ?? -1) > 3
  const error = ok ? 'invalid email' : undefined

  const detectedIp: string = requestIp.getClientIp(req) as string

  const geo = castGeo(detectedIp)

  const vercelGeo = {
    country: req.headers['x-vercel-ip-country'],
    countryRegion: req.headers['x-vercel-ip-country-region'],
    city: req.headers['x-vercel-ip-city'],
    latitude: req.headers['x-vercel-ip-latitude'],
    longitude: req.headers['x-vercel-ip-longitude'],
    timezone: req.headers['x-vercel-ip-timezone'],
  }

  const meta = `
  ua:     ${req.headers['user-agent']}
  ip:     ${detectedIp}
  geo:    ${JSON.stringify(geo)}
  vercel: ${JSON.stringify(vercelGeo)}
  `

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
    text: `Email: ${email}\n${meta}`,

    html: `
    <table>
    <tr>
      <th>Field</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>Email</td>
      <td>${email}</td>
    </tr>    
    <tr>
      <td>User Agent</td>
      <td>${req.headers['user-agent']}</td>
    </tr>
    <tr>
      <td>IP</td>
      <td>${detectedIp}</td>
    </tr>
    <tr>
      <td>Geo</td>
      <td>${JSON.stringify(geo)}</td>
    </tr>        
  </table>    
    
    
    
    `,
  }

  return { ok, error, data }
}
