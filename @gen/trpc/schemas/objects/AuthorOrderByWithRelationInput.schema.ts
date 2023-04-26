import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PageTextOrderByRelationAggregateInputObjectSchema } from './PageTextOrderByRelationAggregateInput.schema'
import { StoryOrderByRelationAggregateInputObjectSchema } from './StoryOrderByRelationAggregateInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AuthorOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    stories: z
      .lazy(() => StoryOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(() => PageTextOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const AuthorOrderByWithRelationInputObjectSchema = Schema
