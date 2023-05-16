import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateNestedManyWithoutAuthorInputObjectSchema } from "./StoryCreateNestedManyWithoutAuthorInput.schema"

const Schema: z.ZodType<Prisma.AuthorCreateWithoutPageTextsInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorCreateWithoutPageTextsInputObjectSchema = Schema
