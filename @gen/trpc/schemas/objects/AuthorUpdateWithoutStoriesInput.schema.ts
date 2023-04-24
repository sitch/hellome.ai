import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { PageTextUpdateManyWithoutAuthorNestedInputObjectSchema } from './PageTextUpdateManyWithoutAuthorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpdateWithoutStoriesInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pageTexts: z
      .lazy(() => PageTextUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorUpdateWithoutStoriesInputObjectSchema = Schema
