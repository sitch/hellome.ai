import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from "./PageTextUncheckedUpdateManyWithoutAuthorNestedInput.schema"
import { StoryUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from "./StoryUncheckedUpdateManyWithoutAuthorNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

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
        () => PageTextUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const AuthorUncheckedUpdateInputObjectSchema = Schema
