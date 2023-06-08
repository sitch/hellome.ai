/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateWithoutTranslatorInputObjectSchema } from "./PageTextCreateWithoutTranslatorInput.schema"
import { PageTextUncheckedCreateWithoutTranslatorInputObjectSchema } from "./PageTextUncheckedCreateWithoutTranslatorInput.schema"
import { PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema } from "./PageTextUncheckedUpdateWithoutTranslatorInput.schema"
import { PageTextUpdateWithoutTranslatorInputObjectSchema } from "./PageTextUpdateWithoutTranslatorInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextUpsertWithWhereUniqueWithoutTranslatorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PageTextUpdateWithoutTranslatorInputObjectSchema),
      z.lazy(() => PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PageTextCreateWithoutTranslatorInputObjectSchema),
      z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextUpsertWithWhereUniqueWithoutTranslatorInputObjectSchema =
  Schema
