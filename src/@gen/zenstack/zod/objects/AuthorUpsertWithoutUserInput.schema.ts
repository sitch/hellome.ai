/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateWithoutUserInputObjectSchema } from "./AuthorCreateWithoutUserInput.schema"
import { AuthorUncheckedCreateWithoutUserInputObjectSchema } from "./AuthorUncheckedCreateWithoutUserInput.schema"
import { AuthorUncheckedUpdateWithoutUserInputObjectSchema } from "./AuthorUncheckedUpdateWithoutUserInput.schema"
import { AuthorUpdateWithoutUserInputObjectSchema } from "./AuthorUpdateWithoutUserInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorUpsertWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => AuthorUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AuthorUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutUserInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorUpsertWithoutUserInputObjectSchema = Schema
