import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from "./StoryUncheckedCreateNestedManyWithoutAuthorInput.schema"

const Schema: z.ZodType<Prisma.AuthorUncheckedCreateWithoutPageTextsInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorUncheckedCreateWithoutPageTextsInputObjectSchema = Schema
