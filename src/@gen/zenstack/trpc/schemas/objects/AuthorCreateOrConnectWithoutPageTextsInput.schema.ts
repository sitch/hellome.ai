/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateWithoutPageTextsInputObjectSchema } from "./AuthorCreateWithoutPageTextsInput.schema"
import { AuthorUncheckedCreateWithoutPageTextsInputObjectSchema } from "./AuthorUncheckedCreateWithoutPageTextsInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./AuthorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorCreateOrConnectWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorCreateOrConnectWithoutPageTextsInputObjectSchema = Schema
