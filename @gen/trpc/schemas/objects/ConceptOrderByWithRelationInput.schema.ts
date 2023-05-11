import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { DreamBoothTrainingOrderByWithRelationInputObjectSchema } from "./DreamBoothTrainingOrderByWithRelationInput.schema"
import { PhotoOrderByRelationAggregateInputObjectSchema } from "./PhotoOrderByRelationAggregateInput.schema"

const Schema: z.ZodType<Prisma.ConceptOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    prompt: z.lazy(() => SortOrderSchema).optional(),
    identifier: z.lazy(() => SortOrderSchema).optional(),
    classNoun: z.lazy(() => SortOrderSchema).optional(),
    negativePrompt: z.lazy(() => SortOrderSchema).optional(),
    instancePrompt: z.lazy(() => SortOrderSchema).optional(),
    classPrompt: z.lazy(() => SortOrderSchema).optional(),
    positivePrompts: z.lazy(() => SortOrderSchema).optional(),
    negativePrompts: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    dreamboothTrainingId: z.lazy(() => SortOrderSchema).optional(),
    dreamboothModelURI: z.lazy(() => SortOrderSchema).optional(),
    dreamboothTraining: z
      .lazy(() => DreamBoothTrainingOrderByWithRelationInputObjectSchema)
      .optional(),
    photos: z
      .lazy(() => PhotoOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const ConceptOrderByWithRelationInputObjectSchema = Schema