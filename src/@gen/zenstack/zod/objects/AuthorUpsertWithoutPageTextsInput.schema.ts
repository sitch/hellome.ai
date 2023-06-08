/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateWithoutPageTextsInputObjectSchema } from "./AuthorCreateWithoutPageTextsInput.schema"
import { AuthorUncheckedCreateWithoutPageTextsInputObjectSchema } from "./AuthorUncheckedCreateWithoutPageTextsInput.schema"
import { AuthorUncheckedUpdateWithoutPageTextsInputObjectSchema } from "./AuthorUncheckedUpdateWithoutPageTextsInput.schema"
import { AuthorUpdateWithoutPageTextsInputObjectSchema } from "./AuthorUpdateWithoutPageTextsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorUpsertWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => AuthorUpdateWithoutPageTextsInputObjectSchema),
      z.lazy(() => AuthorUncheckedUpdateWithoutPageTextsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorUpsertWithoutPageTextsInputObjectSchema = Schema
