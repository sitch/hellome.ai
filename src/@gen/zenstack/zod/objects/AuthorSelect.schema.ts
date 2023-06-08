/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextSchema } from "../PageText.schema"
import { StorySchema } from "../Story.schema"
import { AuthorCountOutputTypeArgsObjectSchema } from "./AuthorCountOutputTypeArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.AuthorSelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    stories: z
      .union([z.boolean(), z.lazy(() => StorySchema.findMany)])
      .optional(),
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextSchema.findMany)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AuthorCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const AuthorSelectObjectSchema = Schema
