/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./ArtistUncheckedCreateNestedOneWithoutUserInput.schema"
import { EditionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./EditionUncheckedCreateNestedManyWithoutUserInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserUncheckedCreateWithoutAuthorInput,
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
    editions: z
      .lazy(() => EditionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutAuthorInputObjectSchema = Schema
