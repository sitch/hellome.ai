/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { TranslatorCreateWithoutPageTextsInputObjectSchema } from "./TranslatorCreateWithoutPageTextsInput.schema"
import { TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema } from "./TranslatorUncheckedCreateWithoutPageTextsInput.schema"
import { TranslatorUncheckedUpdateWithoutPageTextsInputObjectSchema } from "./TranslatorUncheckedUpdateWithoutPageTextsInput.schema"
import { TranslatorUpdateWithoutPageTextsInputObjectSchema } from "./TranslatorUpdateWithoutPageTextsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.TranslatorUpsertWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => TranslatorUpdateWithoutPageTextsInputObjectSchema),
      z.lazy(() => TranslatorUncheckedUpdateWithoutPageTextsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TranslatorCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const TranslatorUpsertWithoutPageTextsInputObjectSchema = Schema
