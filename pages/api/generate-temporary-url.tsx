import { NextApiRequest, NextApiResponse } from "next"
import { generateTemporaryUrl } from "next-s3-upload"

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
  res: NextApiResponse<Data>,
) {
  const key = req.query.key
  const temporaryUrl = await generateTemporaryUrl(key)

  res.status(200).json({ temporaryUrl })
}




import { NextApiRequest, NextApiResponse } from "next";
import multiparty from "multiparty";

const uploadImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new multiparty.Form();
  const data = await new Promise((resolve, reject) => {
    form.parse(req, function (err, fields, files) {
      if (err) reject({ err });
      resolve({ fields, files });
    });
  });
  console.log(`data: `, JSON.stringify(data));

  res.status(200).json({ success: true });
};

export default uploadImage;
export const config = {
  api: {
    bodyParser: false,
  },
};


