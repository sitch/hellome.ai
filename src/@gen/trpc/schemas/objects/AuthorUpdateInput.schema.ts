import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUpdateManyWithoutAuthorNestedInputObjectSchema } from "./PageTextUpdateManyWithoutAuthorNestedInput.schema"
import { StoryUpdateManyWithoutAuthorNestedInputObjectSchema } from "./StoryUpdateManyWithoutAuthorNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.AuthorUpdateInput> = z
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
    pageTexts: z
      .lazy(() => PageTextUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorUpdateInputObjectSchema = Schema
