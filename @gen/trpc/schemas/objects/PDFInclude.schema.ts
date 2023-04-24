import { z } from 'zod'
import { CloudFileArgsObjectSchema } from './CloudFileArgs.schema'
import { EditionArgsObjectSchema } from './EditionArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFInclude> = z
  .object({
    file: z
      .union([z.boolean(), z.lazy(() => CloudFileArgsObjectSchema)])
      .optional(),
    book: z
      .union([z.boolean(), z.lazy(() => EditionArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PDFIncludeObjectSchema = Schema
