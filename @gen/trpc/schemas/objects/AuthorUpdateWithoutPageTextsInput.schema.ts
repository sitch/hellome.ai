import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { StoryUpdateManyWithoutAuthorNestedInputObjectSchema } from './StoryUpdateManyWithoutAuthorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpdateWithoutPageTextsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    stories: z
      .lazy(() => StoryUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorUpdateWithoutPageTextsInputObjectSchema = Schema
