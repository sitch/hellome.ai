import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { StoryUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './StoryUncheckedUpdateManyWithoutAuthorNestedInput.schema'
import { PageTextUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './PageTextUncheckedUpdateManyWithoutAuthorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    stories: z
      .lazy(() => StoryUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AuthorUncheckedUpdateInputObjectSchema = Schema
