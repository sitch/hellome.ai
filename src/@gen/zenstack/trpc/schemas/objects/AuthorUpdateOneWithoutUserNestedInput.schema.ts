/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateOrConnectWithoutUserInputObjectSchema } from "./AuthorCreateOrConnectWithoutUserInput.schema"
import { AuthorCreateWithoutUserInputObjectSchema } from "./AuthorCreateWithoutUserInput.schema"
import { AuthorUncheckedCreateWithoutUserInputObjectSchema } from "./AuthorUncheckedCreateWithoutUserInput.schema"
import { AuthorUncheckedUpdateWithoutUserInputObjectSchema } from "./AuthorUncheckedUpdateWithoutUserInput.schema"
import { AuthorUpdateWithoutUserInputObjectSchema } from "./AuthorUpdateWithoutUserInput.schema"
import { AuthorUpsertWithoutUserInputObjectSchema } from "./AuthorUpsertWithoutUserInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./AuthorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorUpdateOneWithoutUserNestedInput,
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
    upsert: z.lazy(() => AuthorUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AuthorUpdateWithoutUserInputObjectSchema),
        z.lazy(() => AuthorUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AuthorUpdateOneWithoutUserNestedInputObjectSchema = Schema
