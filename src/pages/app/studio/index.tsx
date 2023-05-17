"use server"

import { useEffect, useRef, useState } from "react"

import { Designer, type Template } from "@pdfme/ui"
import { jsPDF } from "jspdf"
import backgroundImage from "public/static/images/404.png"

const [height, width] = [800, 800]

const doc = new jsPDF("landscape", "mm", [height, width])
const basePdf = doc.output("datauristring")

// import backgroundImage from "public/static/images/404.png"
// import { fileToBase64 } from "@/components/filepond/utils"
// import datauri from 'datauri';
const decoded = Buffer.from(backgroundImage.src)

console.log({
  uri: backgroundImage.blurDataURL,
  backgroundImage,
  content: backgroundImage.src,
  decoded,
})

// console.log({ decoded })
// console.log({decoded})
// console.log({decoded})
// console.log({decoded})
// console.log({decoded})

const getSampleTemplate = (): Template => ({
  schemas: [
    // {
    //   background: {
    //     type: "image",
    //     position: {
    //       x: 0,
    //       y: 0,
    //     },
    //     width,
    //     height,
    //   },
    // },
    // {
    //   name: {
    //     type: "text",
    //     position: {
    //       x: 25.06,
    //       y: 26.35,
    //     },
    //     width: 77.77,
    //     height: 18.7,
    //     fontSize: 36,
    //     fontColor: "#14b351",
    //   },
    //   photo: {
    //     type: "image",
    //     position: {
    //       x: 24.99,
    //       y: 65.61,
    //     },
    //     width: 60.66,
    //     height: 93.78,
    //   },
    //   age: {
    //     type: "text",
    //     position: {
    //       x: 36,
    //       y: 179.46,
    //     },
    //     width: 43.38,
    //     height: 6.12,
    //     fontSize: 12,
    //   },
    //   sex: {
    //     type: "text",
    //     position: {
    //       x: 36,
    //       y: 186.23,
    //     },
    //     width: 43.38,
    //     height: 6.12,
    //     fontSize: 12,
    //   },
    //   weight: {
    //     type: "text",
    //     position: {
    //       x: 40,
    //       y: 192.99,
    //     },
    //     width: 43.38,
    //     height: 6.12,
    //     fontSize: 12,
    //   },
    //   breed: {
    //     type: "text",
    //     position: {
    //       x: 40,
    //       y: 199.09,
    //     },
    //     width: 43.38,
    //     height: 6.12,
    //     fontSize: 12,
    //   },
    //   owner: {
    //     type: "qrcode",
    //     position: {
    //       x: 115.09,
    //       y: 204.43,
    //     },
    //     width: 26.53,
    //     height: 26.53,
    //   },
    // },
  ],
  // basePdf: examplePdf_b64,
  // basePdf: "data:application/pdf;base64,",\
  basePdf,
  sampledata: [
    {
      // background: `data:application/pdf;base64,${await fileToBase64(backgroundImage)}`,
      // backgroundImage
      // background: await dataUriToBuffer("/public/static/images/404.png") ,
      // name: "Pet Name",
      // photo: dogPng64,
      // age: "4 years",
      // sex: "Male",
      // weight: "33 pounds",
      // breed: "Mutt",
      // owner: "https://pdfme.com/",
    },
  ],
  columns: [
    // "background",
    // "name", "photo", "age", "sex", "weight", "breed", "owner"
  ],
})

const Page = () => {
  const sampleTemplate = getSampleTemplate()

  const designer = useRef<Designer | null>(null)
  const designerRef = useRef<HTMLDivElement | null>(null)
  const [template, setTemplate] = useState<Template>(sampleTemplate)

  useEffect(() => {
    if (!designerRef.current) {
      return
    }
    designer.current = new Designer({
      domContainer: designerRef.current,
      template,
    })
    // designer.current.onSaveTemplate(downloadTemplate)
    designer.current.onChangeTemplate(setTemplate)

    return () => {
      designer.current?.destroy()
    }
  }, [template, designerRef])

  return (
    <>
      <div
        ref={designerRef}
        style={{
          width: "100%",
          height: "calc(100vh)",
          // height: `calc(100vh - ${headerHeight + controllerHeight}px)`,
        }}
      />
    </>
  )
}

export default Page
