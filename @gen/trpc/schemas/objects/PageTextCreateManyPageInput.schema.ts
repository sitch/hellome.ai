import { LocaleSchema } from '../enums/Locale.schema'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { PageTextTypeSchema } from '../enums/PageTextType.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextCreateManyPageInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    locale: z.lazy(() => LocaleSchema),
    text: z.string(),
    type: z.lazy(() => PageTextTypeSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    storyId: z.string(),
    authorId: z.string().optional().nullable(),
    translatorId: z.string().optional().nullable(),
  })
  .strict()

export const PageTextCreateManyPageInputObjectSchema = Schema
