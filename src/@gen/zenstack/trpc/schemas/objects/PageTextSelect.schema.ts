/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorArgsObjectSchema } from "./AuthorArgs.schema"
import { PageArgsObjectSchema } from "./PageArgs.schema"
import { StoryArgsObjectSchema } from "./StoryArgs.schema"
import { TranslatorArgsObjectSchema } from "./TranslatorArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageTextSelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    status: z.boolean().optional(),
    locale: z.boolean().optional(),
    text: z.boolean().optional(),
    type: z.boolean().optional(),
    pageId: z.boolean().optional(),
    storyId: z.boolean().optional(),
    authorId: z.boolean().optional(),
    translatorId: z.boolean().optional(),
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
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
  })
  .strict()

export const PageTextSelectObjectSchema = Schema
