/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutAuthorInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorUncheckedCreateWithoutStoriesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    userId: z.string(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedCreateNestedManyWithoutAuthorInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const AuthorUncheckedCreateWithoutStoriesInputObjectSchema = Schema
