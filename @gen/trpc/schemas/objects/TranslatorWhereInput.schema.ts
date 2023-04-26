import { PageTextListRelationFilterObjectSchema } from './PageTextListRelationFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TranslatorWhereInputObjectSchema),
        z.lazy(() => TranslatorWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TranslatorWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TranslatorWhereInputObjectSchema),
        z.lazy(() => TranslatorWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pageTexts: z.lazy(() => PageTextListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const TranslatorWhereInputObjectSchema = Schema
