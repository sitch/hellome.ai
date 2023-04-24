import { z } from 'zod'

export const PDFScalarFieldEnumSchema = z.enum([
  'id',
  'height',
  'width',
  'pages',
  'tags',
  'createdAt',
  'fileId',
])
