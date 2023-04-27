import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryUpdateManyWithoutAuthorNestedInputObjectSchema } from "./StoryUpdateManyWithoutAuthorNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

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
