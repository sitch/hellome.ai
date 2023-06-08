/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextSchema } from "../PageText.schema"
import { StorySchema } from "../Story.schema"
import { AuthorCountOutputTypeArgsObjectSchema } from "./AuthorCountOutputTypeArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.AuthorInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    stories: z
      .union([z.boolean(), z.lazy(() => StorySchema.findMany)])
      .optional(),
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextSchema.findMany)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AuthorCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const AuthorIncludeObjectSchema = Schema
