import { CloudFileArgsObjectSchema } from './CloudFileArgs.schema'
import { EditionArgsObjectSchema } from './EditionArgs.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PDFSelect> = z
  .object({
    id: z.boolean().optional(),
    height: z.boolean().optional(),
    width: z.boolean().optional(),
    pages: z.boolean().optional(),
    tags: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    fileId: z.boolean().optional(),
    file: z
      .union([z.boolean(), z.lazy(() => CloudFileArgsObjectSchema)])
      .optional(),
    edition: z
      .union([z.boolean(), z.lazy(() => EditionArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PDFSelectObjectSchema = Schema
