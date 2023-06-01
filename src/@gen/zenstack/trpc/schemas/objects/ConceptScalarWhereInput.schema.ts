/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"
import { ConceptTypeSchema } from "../enums/ConceptType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { EnumConceptStatusFilterObjectSchema } from "./EnumConceptStatusFilter.schema"
import { EnumConceptTypeFilterObjectSchema } from "./EnumConceptTypeFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptScalarWhereInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConceptScalarWhereInputObjectSchema),
        z.lazy(() => ConceptScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConceptScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConceptScalarWhereInputObjectSchema),
        z.lazy(() => ConceptScalarWhereInputObjectSchema).array(),
      ])
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
    status: z
      .union([
        z.lazy(() => EnumConceptStatusFilterObjectSchema),
        z.lazy(() => ConceptStatusSchema),
      ])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    prompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    identifier: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    classNoun: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    negativePrompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    instancePrompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    classPrompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    positivePrompts: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    negativePrompts: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    dreamboothTrainingId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    dreamboothModelURI: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const ConceptScalarWhereInputObjectSchema = Schema
