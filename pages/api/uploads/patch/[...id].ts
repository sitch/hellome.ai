import { NextApiResponse } from "next"
import { FormNextApiRequest, getConfig, withFileUpload } from "next-multiparty"

const methods = ["PATCH"]

/**
 * Patch
 *
 * @methods GET
 * @default "<SERVER>/?patch=<id>"
 * @link https://pqina.nl/filepond/docs/api/server/#patch
 */
async function handler(req: FormNextApiRequest, res: NextApiResponse) {
  res.json({ file: req.file, fields: req.fields })
}

export default withFileUpload(handler)

export const config = getConfig()

// import { NextApiRequest, NextApiResponse } from "next";
// import multiparty from "multiparty";

// const uploadImage = async (req: NextApiRequest, res: NextApiResponse) => {
//   const form = new multiparty.Form();
//   const data = await new Promise((resolve, reject) => {
//     form.parse(req, function (err, fields, files) {
//       if (err) reject({ err });
//       resolve({ fields, files });
//     });
//   });
//   console.log(`data: `, JSON.stringify(data));

//   res.status(200).json({ success: true });
// };

// export default uploadImage;
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
