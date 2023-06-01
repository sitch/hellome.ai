/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateOrConnectWithoutUserInputObjectSchema } from "./AuthorCreateOrConnectWithoutUserInput.schema"
import { AuthorCreateWithoutUserInputObjectSchema } from "./AuthorCreateWithoutUserInput.schema"
import { AuthorUncheckedCreateWithoutUserInputObjectSchema } from "./AuthorUncheckedCreateWithoutUserInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./AuthorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorUncheckedCreateNestedOneWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthorCreateWithoutUserInputObjectSchema),
        z.lazy(() => AuthorUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AuthorCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AuthorUncheckedCreateNestedOneWithoutUserInputObjectSchema = Schema
