import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutAuthorInput.schema"
import { StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from "./StoryUncheckedCreateNestedManyWithoutAuthorInput.schema"

const Schema: z.ZodType<Prisma.AuthorUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedCreateNestedManyWithoutAuthorInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const AuthorUncheckedCreateInputObjectSchema = Schema
