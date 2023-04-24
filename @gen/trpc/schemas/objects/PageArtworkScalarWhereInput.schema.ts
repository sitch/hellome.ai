import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { EnumPageStatusFilterObjectSchema } from './EnumPageStatusFilter.schema'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema),
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageArtworkScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema),
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema).array(),
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
    artistId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    photoId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const PageArtworkScalarWhereInputObjectSchema = Schema
