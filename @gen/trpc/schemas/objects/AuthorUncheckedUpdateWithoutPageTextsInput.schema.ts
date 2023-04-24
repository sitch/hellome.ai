import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { StoryUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './StoryUncheckedUpdateManyWithoutAuthorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUncheckedUpdateWithoutPageTextsInput> = z
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
  })
  .strict()

export const AuthorUncheckedUpdateWithoutPageTextsInputObjectSchema = Schema
