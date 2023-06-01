/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateOrConnectWithoutPageTextsInputObjectSchema } from "./AuthorCreateOrConnectWithoutPageTextsInput.schema"
import { AuthorCreateWithoutPageTextsInputObjectSchema } from "./AuthorCreateWithoutPageTextsInput.schema"
import { AuthorUncheckedCreateWithoutPageTextsInputObjectSchema } from "./AuthorUncheckedCreateWithoutPageTextsInput.schema"
import { AuthorUncheckedUpdateWithoutPageTextsInputObjectSchema } from "./AuthorUncheckedUpdateWithoutPageTextsInput.schema"
import { AuthorUpdateWithoutPageTextsInputObjectSchema } from "./AuthorUpdateWithoutPageTextsInput.schema"
import { AuthorUpsertWithoutPageTextsInputObjectSchema } from "./AuthorUpsertWithoutPageTextsInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./AuthorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorUpdateOneWithoutPageTextsNestedInput,
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
    upsert: z
      .lazy(() => AuthorUpsertWithoutPageTextsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AuthorUpdateWithoutPageTextsInputObjectSchema),
        z.lazy(() => AuthorUncheckedUpdateWithoutPageTextsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AuthorUpdateOneWithoutPageTextsNestedInputObjectSchema = Schema
