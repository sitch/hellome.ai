/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorArgsObjectSchema } from "./AuthorArgs.schema"
import { PageArgsObjectSchema } from "./PageArgs.schema"
import { StoryArgsObjectSchema } from "./StoryArgs.schema"
import { TranslatorArgsObjectSchema } from "./TranslatorArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageTextInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    page: z.union([z.boolean(), z.lazy(() => PageArgsObjectSchema)]).optional(),
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    author: z
      .union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)])
      .optional(),
    translator: z
      .union([z.boolean(), z.lazy(() => TranslatorArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PageTextIncludeObjectSchema = Schema
