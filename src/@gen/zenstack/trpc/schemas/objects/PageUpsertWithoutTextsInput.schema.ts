/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageCreateWithoutTextsInputObjectSchema } from "./PageCreateWithoutTextsInput.schema"
import { PageUncheckedCreateWithoutTextsInputObjectSchema } from "./PageUncheckedCreateWithoutTextsInput.schema"
import { PageUncheckedUpdateWithoutTextsInputObjectSchema } from "./PageUncheckedUpdateWithoutTextsInput.schema"
import { PageUpdateWithoutTextsInputObjectSchema } from "./PageUpdateWithoutTextsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageUpsertWithoutTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => PageUpdateWithoutTextsInputObjectSchema),
      z.lazy(() => PageUncheckedUpdateWithoutTextsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PageCreateWithoutTextsInputObjectSchema),
      z.lazy(() => PageUncheckedCreateWithoutTextsInputObjectSchema),
    ]),
  })
  .strict()

export const PageUpsertWithoutTextsInputObjectSchema = Schema
