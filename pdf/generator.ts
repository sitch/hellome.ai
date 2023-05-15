import { BLANK_PDF, Template, generate as pdfGenerator } from '@pdfme/generator'
import { writeFileSync } from 'fs'
import path from 'path'

import { Page } from './pdf-types'

const template: Template = {
  basePdf: BLANK_PDF,
  schemas: [
    {
      title: {
        type: 'text',
        position: { x: 100, y: 300 },
        width: 100,
        height: 50,
      },
      subTitle: {
        type: 'text',
        position: { x: 100, y: 450 },
        width: 100,
        height: 50,
      },
      author: {
        type: 'text',
        position: { x: 100, y: 550 },
        width: 100,
        height: 50,
      },
      publicationDate: {
        type: 'text',
        position: { x: 100, y: 850 },
        width: 100,
        height: 50,
      },
      text: {
        type: 'text',
        position: { x: 50, y: 50 },
        width: 500,
        height: 1000,
      },
      pageNumber: {
        type: 'text',
        position: { x: 100, y: 1250 },
        width: 40,
        height: 40,
      },
      closeMessage: {
        type: 'text',
        position: { x: 100, y: 300 },
        width: 500,
        height: 700,
      },
    },
  ],
}

// 1. Read/Parse the content of the JSON object
// const filePath = './sherlock.json';
// const jsonData = readFileSync(filePath, 'utf-8');

// 2. Iterate over every object in the "data" to create the
// schemas array (use narrowing for page type layout)

import jsonObject from './sherlock.json'

let inputs: Page[] = jsonObject.data

// const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }]

type GenerateProps = {
  name: string
}

export const generate = async ({ name }: GenerateProps) => {
  return pdfGenerator({ template, inputs }).then((pdf) => {
    console.log(pdf)

    // Browser
    // const blob = new Blob([pdf.buffer], { type: 'application/pdf' })
    // window.open(URL.createObjectURL(blob))

    // Node.js
    const filename = path.join(__dirname, `../pdf/out/test.pdf`)
    writeFileSync(filename, pdf)

    return {
      ok: true,
      filename,
    }
  })
}
