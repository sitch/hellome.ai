import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { PDFRelationFilterObjectSchema } from './PDFRelationFilter.schema'
import { PDFWhereInputObjectSchema } from './PDFWhereInput.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EditionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EditionWhereInputObjectSchema),
        z.lazy(() => EditionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EditionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EditionWhereInputObjectSchema),
        z.lazy(() => EditionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pdfId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    pdf: z
      .union([
        z.lazy(() => PDFRelationFilterObjectSchema),
        z.lazy(() => PDFWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EditionWhereInputObjectSchema = Schema
