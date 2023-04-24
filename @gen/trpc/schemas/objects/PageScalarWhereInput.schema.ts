import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { EnumPageStatusFilterObjectSchema } from './EnumPageStatusFilter.schema'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { EnumPageTypeFilterObjectSchema } from './EnumPageTypeFilter.schema'
import { PageTypeSchema } from '../enums/PageType.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageScalarWhereInputObjectSchema),
        z.lazy(() => PageScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageScalarWhereInputObjectSchema),
        z.lazy(() => PageScalarWhereInputObjectSchema).array(),
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
    type: z
      .union([
        z.lazy(() => EnumPageTypeFilterObjectSchema),
        z.lazy(() => PageTypeSchema),
      ])
      .optional(),
    pageNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    storyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const PageScalarWhereInputObjectSchema = Schema
