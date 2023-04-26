import { LocaleSchema } from '../enums/Locale.schema'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { PageTextTypeSchema } from '../enums/PageTextType.schema'
import { PageCreateNestedOneWithoutTextsInputObjectSchema } from './PageCreateNestedOneWithoutTextsInput.schema'
import { StoryCreateNestedOneWithoutPageTextsInputObjectSchema } from './StoryCreateNestedOneWithoutPageTextsInput.schema'
import { TranslatorCreateNestedOneWithoutPageTextsInputObjectSchema } from './TranslatorCreateNestedOneWithoutPageTextsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextCreateWithoutAuthorInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    locale: z.lazy(() => LocaleSchema),
    text: z.string(),
    type: z.lazy(() => PageTextTypeSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    page: z.lazy(() => PageCreateNestedOneWithoutTextsInputObjectSchema),
    story: z.lazy(() => StoryCreateNestedOneWithoutPageTextsInputObjectSchema),
    translator: z
      .lazy(() => TranslatorCreateNestedOneWithoutPageTextsInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageTextCreateWithoutAuthorInputObjectSchema = Schema
