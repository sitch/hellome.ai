/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateNestedOneWithoutUserInputObjectSchema } from "./AuthorCreateNestedOneWithoutUserInput.schema"
import { EditionCreateNestedManyWithoutUserInputObjectSchema } from "./EditionCreateNestedManyWithoutUserInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateWithoutArtistInput,
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
    author: z
      .lazy(() => AuthorCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    editions: z
      .lazy(() => EditionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserCreateWithoutArtistInputObjectSchema = Schema
