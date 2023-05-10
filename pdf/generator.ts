import { Template, generate as pdfGenerator } from '@pdfme/generator'
import { exec } from 'child_process'
import { BLANK_PDF } from '@pdfme/generator'
import { writeFileSync } from 'fs'
import path from 'path'
// import { Template, BLANK_PDF } from '@pdfme/ui'; <- Template types and BLANK_PDF can also be imported from @pdfme/ui.
// import { Template, Designer, Form, Viewer } from '@pdfme/ui';

const template: Template = {
  basePdf: BLANK_PDF,
  schemas: [
    {
      a: {
        type: 'text',
        position: { x: 1, y: 30 },
        width: 100,
        height: 10,
      },
      b: {
        type: 'text',
        position: { x: 33, y: 10 },
        width: 10,
        height: 10,
      },
      c: {
        type: 'text',
        position: { x: 20, y: 20 },
        width: 10,
        height: 10,
      },
    },
  ],
}

const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }]

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
    const filename = path.join(__dirname, `../out/test.pdf`)
    writeFileSync(filename, pdf)

    // exec('open ../out/test.pdf')

    return {
      ok: true,
      filename,
    }
  })
}