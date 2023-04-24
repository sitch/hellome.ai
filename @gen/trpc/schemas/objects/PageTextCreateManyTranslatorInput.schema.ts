import { z } from 'zod'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { LocaleSchema } from '../enums/Locale.schema'
import { PageTextTypeSchema } from '../enums/PageTextType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextCreateManyTranslatorInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    locale: z.lazy(() => LocaleSchema),
    text: z.string(),
    type: z.lazy(() => PageTextTypeSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    pageId: z.string(),
    storyId: z.string(),
    authorId: z.string().optional().nullable(),
  })
  .strict()

export const PageTextCreateManyTranslatorInputObjectSchema = Schema
