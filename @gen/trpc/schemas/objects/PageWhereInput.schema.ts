import { PageStatusSchema } from '../enums/PageStatus.schema'
import { PageTypeSchema } from '../enums/PageType.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { EnumPageStatusFilterObjectSchema } from './EnumPageStatusFilter.schema'
import { EnumPageTypeFilterObjectSchema } from './EnumPageTypeFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { PageArtworkListRelationFilterObjectSchema } from './PageArtworkListRelationFilter.schema'
import { PageTextListRelationFilterObjectSchema } from './PageTextListRelationFilter.schema'
import { StoryRelationFilterObjectSchema } from './StoryRelationFilter.schema'
import { StoryWhereInputObjectSchema } from './StoryWhereInput.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageWhereInputObjectSchema),
        z.lazy(() => PageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageWhereInputObjectSchema),
        z.lazy(() => PageWhereInputObjectSchema).array(),
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
    story: z
      .union([
        z.lazy(() => StoryRelationFilterObjectSchema),
        z.lazy(() => StoryWhereInputObjectSchema),
      ])
      .optional(),
    artworks: z
      .lazy(() => PageArtworkListRelationFilterObjectSchema)
      .optional(),
    texts: z.lazy(() => PageTextListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const PageWhereInputObjectSchema = Schema
