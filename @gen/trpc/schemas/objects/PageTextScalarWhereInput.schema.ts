import { LocaleSchema } from '../enums/Locale.schema'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { PageTextTypeSchema } from '../enums/PageTextType.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { EnumLocaleFilterObjectSchema } from './EnumLocaleFilter.schema'
import { EnumPageStatusFilterObjectSchema } from './EnumPageStatusFilter.schema'
import { EnumPageTextTypeFilterObjectSchema } from './EnumPageTextTypeFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageTextScalarWhereInputObjectSchema),
        z.lazy(() => PageTextScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageTextScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageTextScalarWhereInputObjectSchema),
        z.lazy(() => PageTextScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPageStatusFilterObjectSchema),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    locale: z
      .union([
        z.lazy(() => EnumLocaleFilterObjectSchema),
        z.lazy(() => LocaleSchema),
      ])
      .optional(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumPageTextTypeFilterObjectSchema),
        z.lazy(() => PageTextTypeSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    pageId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    storyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    authorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    translatorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const PageTextScalarWhereInputObjectSchema = Schema
