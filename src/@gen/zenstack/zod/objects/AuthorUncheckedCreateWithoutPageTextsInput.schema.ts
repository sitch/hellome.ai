/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from "./StoryUncheckedCreateNestedManyWithoutAuthorInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorUncheckedCreateWithoutPageTextsInput,
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
    stories: z
      .lazy(() => StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorUncheckedCreateWithoutPageTextsInputObjectSchema = Schema
