/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateNestedManyWithoutAuthorInputObjectSchema } from "./StoryCreateNestedManyWithoutAuthorInput.schema"
import { UserCreateNestedOneWithoutAuthorInputObjectSchema } from "./UserCreateNestedOneWithoutAuthorInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorCreateWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
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
    user: z.lazy(() => UserCreateNestedOneWithoutAuthorInputObjectSchema),
  })
  .strict()

export const AuthorCreateWithoutPageTextsInputObjectSchema = Schema
