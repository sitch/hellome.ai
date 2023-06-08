/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateOrConnectWithoutPageTextsInputObjectSchema } from "./AuthorCreateOrConnectWithoutPageTextsInput.schema"
import { AuthorCreateWithoutPageTextsInputObjectSchema } from "./AuthorCreateWithoutPageTextsInput.schema"
import { AuthorUncheckedCreateWithoutPageTextsInputObjectSchema } from "./AuthorUncheckedCreateWithoutPageTextsInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./AuthorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorCreateNestedOneWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthorCreateWithoutPageTextsInputObjectSchema),
        z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AuthorCreateOrConnectWithoutPageTextsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AuthorCreateNestedOneWithoutPageTextsInputObjectSchema = Schema
