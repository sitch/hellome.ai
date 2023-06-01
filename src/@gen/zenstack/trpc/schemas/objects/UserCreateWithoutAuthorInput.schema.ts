/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateNestedOneWithoutUserInputObjectSchema } from "./ArtistCreateNestedOneWithoutUserInput.schema"
import { EditionCreateNestedManyWithoutUserInputObjectSchema } from "./EditionCreateNestedManyWithoutUserInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateWithoutAuthorInput,
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
      .lazy(() => ArtistCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    editions: z
      .lazy(() => EditionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserCreateWithoutAuthorInputObjectSchema = Schema
