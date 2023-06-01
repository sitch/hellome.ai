/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema } from "./PageTextUncheckedUpdateWithoutTranslatorInput.schema"
import { PageTextUpdateWithoutTranslatorInputObjectSchema } from "./PageTextUpdateWithoutTranslatorInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextUpdateWithWhereUniqueWithoutTranslatorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PageTextUpdateWithoutTranslatorInputObjectSchema),
      z.lazy(() => PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextUpdateWithWhereUniqueWithoutTranslatorInputObjectSchema =
  Schema
