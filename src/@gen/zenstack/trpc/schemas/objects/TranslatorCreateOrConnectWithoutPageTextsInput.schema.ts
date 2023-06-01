/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { TranslatorCreateWithoutPageTextsInputObjectSchema } from "./TranslatorCreateWithoutPageTextsInput.schema"
import { TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema } from "./TranslatorUncheckedCreateWithoutPageTextsInput.schema"
import { TranslatorWhereUniqueInputObjectSchema } from "./TranslatorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.TranslatorCreateOrConnectWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => TranslatorWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TranslatorCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const TranslatorCreateOrConnectWithoutPageTextsInputObjectSchema = Schema
