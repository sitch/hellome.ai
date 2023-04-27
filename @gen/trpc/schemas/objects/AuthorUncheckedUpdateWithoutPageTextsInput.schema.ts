import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from "./StoryUncheckedUpdateManyWithoutAuthorNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

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
