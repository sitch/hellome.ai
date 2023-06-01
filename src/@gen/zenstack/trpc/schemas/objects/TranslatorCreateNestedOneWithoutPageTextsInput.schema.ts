/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { TranslatorCreateOrConnectWithoutPageTextsInputObjectSchema } from "./TranslatorCreateOrConnectWithoutPageTextsInput.schema"
import { TranslatorCreateWithoutPageTextsInputObjectSchema } from "./TranslatorCreateWithoutPageTextsInput.schema"
import { TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema } from "./TranslatorUncheckedCreateWithoutPageTextsInput.schema"
import { TranslatorWhereUniqueInputObjectSchema } from "./TranslatorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.TranslatorCreateNestedOneWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => TranslatorCreateWithoutPageTextsInputObjectSchema),
        z.lazy(
          () => TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema,
        ),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TranslatorCreateOrConnectWithoutPageTextsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => TranslatorWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const TranslatorCreateNestedOneWithoutPageTextsInputObjectSchema = Schema
