import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LocaleSchema } from "../enums/Locale.schema"
import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTextTypeSchema } from "../enums/PageTextType.schema"
import { AuthorCreateNestedOneWithoutPageTextsInputObjectSchema } from "./AuthorCreateNestedOneWithoutPageTextsInput.schema"
import { StoryCreateNestedOneWithoutPageTextsInputObjectSchema } from "./StoryCreateNestedOneWithoutPageTextsInput.schema"
import { TranslatorCreateNestedOneWithoutPageTextsInputObjectSchema } from "./TranslatorCreateNestedOneWithoutPageTextsInput.schema"

const Schema: z.ZodType<Prisma.PageTextCreateWithoutPageInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    locale: z.lazy(() => LocaleSchema),
    text: z.string(),
    type: z.lazy(() => PageTextTypeSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    story: z.lazy(() => StoryCreateNestedOneWithoutPageTextsInputObjectSchema),
    author: z
      .lazy(() => AuthorCreateNestedOneWithoutPageTextsInputObjectSchema)
      .optional(),
    translator: z
      .lazy(() => TranslatorCreateNestedOneWithoutPageTextsInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageTextCreateWithoutPageInputObjectSchema = Schema
