/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateWithoutUserInputObjectSchema } from "./AuthorCreateWithoutUserInput.schema"
import { AuthorUncheckedCreateWithoutUserInputObjectSchema } from "./AuthorUncheckedCreateWithoutUserInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./AuthorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorCreateOrConnectWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutUserInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorCreateOrConnectWithoutUserInputObjectSchema = Schema
