// import { useState } from 'react'
// import { useS3Upload } from 'next-s3-upload'

// export default function UploadComponent() {
//   const [imageUrl, setImageUrl] = useState<string>()
//   const { FileInput, openFileDialog, uploadToS3 } = useS3Upload()

//   const handleFileChange = async (file: File) => {
//     const { url } = await uploadToS3(file)
//     setImageUrl(url)
//   }

//   return (
//     <div>
//       <FileInput onChange={handleFileChange} />

//       <button onClick={openFileDialog}>Upload file</button>

//       {imageUrl ? <img src={imageUrl}  alt=""/> : null}
//     </div>
//   )
// }

import { useState } from "react"
import { usePresignedUpload } from "next-s3-upload"

export default function UploadComponent() {
  const [imageUrl, setImageUrl] = useState<string>()
  const { FileInput, openFileDialog, uploadToS3 } = usePresignedUpload()

  const handleFileChange = async (file: File) => {
    const { url } = await uploadToS3(file)
    setImageUrl(url)
  }

  return (
    <div>
      <FileInput onChange={handleFileChange} />

      <button onClick={openFileDialog}>Upload file</button>

      {imageUrl ? <img src={imageUrl} alt="" /> : null}
    </div>
  )
}
