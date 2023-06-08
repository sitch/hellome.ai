/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LocaleSchema } from "../enums/Locale.schema"
import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTextTypeSchema } from "../enums/PageTextType.schema"
import { PageCreateNestedOneWithoutTextsInputObjectSchema } from "./PageCreateNestedOneWithoutTextsInput.schema"
import { StoryCreateNestedOneWithoutPageTextsInputObjectSchema } from "./StoryCreateNestedOneWithoutPageTextsInput.schema"
import { TranslatorCreateNestedOneWithoutPageTextsInputObjectSchema } from "./TranslatorCreateNestedOneWithoutPageTextsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextCreateWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.lazy(() => PageStatusSchema).optional(),
    locale: z.lazy(() => LocaleSchema),
    text: z.string(),
    type: z.lazy(() => PageTextTypeSchema),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    page: z.lazy(() => PageCreateNestedOneWithoutTextsInputObjectSchema),
    story: z.lazy(() => StoryCreateNestedOneWithoutPageTextsInputObjectSchema),
    translator: z
      .lazy(() => TranslatorCreateNestedOneWithoutPageTextsInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageTextCreateWithoutAuthorInputObjectSchema = Schema
