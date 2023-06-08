/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateNestedManyWithoutAuthorInputObjectSchema } from "./PageTextCreateNestedManyWithoutAuthorInput.schema"
import { StoryCreateNestedManyWithoutAuthorInputObjectSchema } from "./StoryCreateNestedManyWithoutAuthorInput.schema"
import { UserCreateNestedOneWithoutAuthorInputObjectSchema } from "./UserCreateNestedOneWithoutAuthorInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.AuthorCreateInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    stories: z
      .lazy(() => StoryCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(() => PageTextCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAuthorInputObjectSchema),
  })
  .strict()

export const AuthorCreateInputObjectSchema = Schema
