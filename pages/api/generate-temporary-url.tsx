import { NextApiRequest, NextApiResponse } from 'next'
import { generateTemporaryUrl } from 'next-s3-upload'

type Props = {
  query: {
    key: string
  }
}

type Data = {
  temporaryUrl: string
}

// pages/api/generate-temporary-url.js
// http://my-next-app/api/generate-temporary-url?key=file-on-s3
// returns { temporaryUrl: "..." }
export default async function handler(
  req: NextApiRequest & Props,
  res: NextApiResponse<Data>
) {
  const key = req.query.key
  const temporaryUrl = await generateTemporaryUrl(key)

  res.status(200).json({ temporaryUrl })
}
