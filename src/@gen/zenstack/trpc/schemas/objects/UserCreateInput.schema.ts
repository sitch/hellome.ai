/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateNestedOneWithoutUserInputObjectSchema } from "./ArtistCreateNestedOneWithoutUserInput.schema"
import { AuthorCreateNestedOneWithoutUserInputObjectSchema } from "./AuthorCreateNestedOneWithoutUserInput.schema"
import { EditionCreateNestedManyWithoutUserInputObjectSchema } from "./EditionCreateNestedManyWithoutUserInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.UserCreateInput, "zenstack_transaction" | "zenstack_guard">
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
      .lazy(() => ArtistCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => AuthorCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    editions: z
      .lazy(() => EditionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserCreateInputObjectSchema = Schema
