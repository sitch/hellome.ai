import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextFindManySchema } from "../findManyPageText.schema"
import { StoryFindManySchema } from "../findManyStory.schema"
import { AuthorCountOutputTypeArgsObjectSchema } from "./AuthorCountOutputTypeArgs.schema"

const Schema: z.ZodType<Prisma.AuthorSelect> = z
  .object({
    id: z.boolean().optional(),
    stories: z
      .union([z.boolean(), z.lazy(() => StoryFindManySchema)])
      .optional(),
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AuthorCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const AuthorSelectObjectSchema = Schema
