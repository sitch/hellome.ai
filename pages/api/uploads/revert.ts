/**
 * Revert
 *
 * @methods DELETE
 * @default "<SERVER>/"
 * @link https://pqina.nl/filepond/docs/api/server/#revert
 */

import { type NextApiRequest, type NextApiResponse } from "next"

const methods = ["DELETE"]

type Props = {
  // add types here
}

export default async function handler(
  { method }: NextApiRequest & Props,
  res: NextApiResponse,
) {
  if (!methods.includes(method!)) {
    res.setHeader("Allow", methods)
    return res.status(405).end(`Method ${method} Not Allowed`)
    // return res.status(405).json({ message: `Method ${method} Not Allowed` })
  }

  return res.status(500).json({ message: "revert not implemented" })
}
