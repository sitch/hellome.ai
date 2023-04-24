import { z } from 'zod'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { LocaleSchema } from '../enums/Locale.schema'
import { PageTextTypeSchema } from '../enums/PageTextType.schema'
import { StoryCreateNestedOneWithoutPageTextsInputObjectSchema } from './StoryCreateNestedOneWithoutPageTextsInput.schema'
import { AuthorCreateNestedOneWithoutPageTextsInputObjectSchema } from './AuthorCreateNestedOneWithoutPageTextsInput.schema'
import { TranslatorCreateNestedOneWithoutPageTextsInputObjectSchema } from './TranslatorCreateNestedOneWithoutPageTextsInput.schema'

import type { Prisma } from '@prisma/client'

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
