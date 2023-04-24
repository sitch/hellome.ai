import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { EnumPageStatusWithAggregatesFilterObjectSchema } from './EnumPageStatusWithAggregatesFilter.schema'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { EnumLocaleWithAggregatesFilterObjectSchema } from './EnumLocaleWithAggregatesFilter.schema'
import { LocaleSchema } from '../enums/Locale.schema'
import { EnumPageTextTypeWithAggregatesFilterObjectSchema } from './EnumPageTextTypeWithAggregatesFilter.schema'
import { PageTextTypeSchema } from '../enums/PageTextType.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageTextScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => PageTextScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageTextScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageTextScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => PageTextScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPageStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    locale: z
      .union([
        z.lazy(() => EnumLocaleWithAggregatesFilterObjectSchema),
        z.lazy(() => LocaleSchema),
      ])
      .optional(),
    text: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumPageTextTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => PageTextTypeSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    pageId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    storyId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    authorId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    translatorId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const PageTextScalarWhereWithAggregatesInputObjectSchema = Schema
