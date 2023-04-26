import { PageTextUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './PageTextUncheckedUpdateManyWithoutAuthorNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AuthorUncheckedUpdateWithoutStoriesInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AuthorUncheckedUpdateWithoutStoriesInputObjectSchema = Schema
