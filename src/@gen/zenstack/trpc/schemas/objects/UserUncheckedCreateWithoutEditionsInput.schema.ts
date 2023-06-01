/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./ArtistUncheckedCreateNestedOneWithoutUserInput.schema"
import { AuthorUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./AuthorUncheckedCreateNestedOneWithoutUserInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserUncheckedCreateWithoutEditionsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    name: z.string(),
    email: z.string(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    artist: z
      .lazy(() => ArtistUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => AuthorUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutEditionsInputObjectSchema = Schema
