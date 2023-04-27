import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptTypeSchema } from "../enums/ConceptType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { EnumConceptTypeFilterObjectSchema } from "./EnumConceptTypeFilter.schema"
import { PhotoListRelationFilterObjectSchema } from "./PhotoListRelationFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

const Schema: z.ZodType<Prisma.ConceptWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConceptWhereInputObjectSchema),
        z.lazy(() => ConceptWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConceptWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConceptWhereInputObjectSchema),
        z.lazy(() => ConceptWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumConceptTypeFilterObjectSchema),
        z.lazy(() => ConceptTypeSchema),
      ])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    photos: z.lazy(() => PhotoListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const ConceptWhereInputObjectSchema = Schema
