import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { CloudFileRelationFilterObjectSchema } from './CloudFileRelationFilter.schema'
import { CloudFileWhereInputObjectSchema } from './CloudFileWhereInput.schema'
import { PageArtworkListRelationFilterObjectSchema } from './PageArtworkListRelationFilter.schema'
import { ConceptListRelationFilterObjectSchema } from './ConceptListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PhotoWhereInputObjectSchema),
        z.lazy(() => PhotoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PhotoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PhotoWhereInputObjectSchema),
        z.lazy(() => PhotoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    height: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    width: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    fileId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    file: z
      .union([
        z.lazy(() => CloudFileRelationFilterObjectSchema),
        z.lazy(() => CloudFileWhereInputObjectSchema),
      ])
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkListRelationFilterObjectSchema)
      .optional(),
    concepts: z.lazy(() => ConceptListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const PhotoWhereInputObjectSchema = Schema
