import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptTensorWhereInputSchema } from '../inputTypeSchemas/ConceptTensorWhereInputSchema'
import { ConceptTensorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ConceptTensorOrderByWithAggregationInputSchema'
import { ConceptTensorScalarFieldEnumSchema } from '../inputTypeSchemas/ConceptTensorScalarFieldEnumSchema'
import { ConceptTensorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ConceptTensorScalarWhereWithAggregatesInputSchema'

export const ConceptTensorGroupByArgsSchema: z.ZodType<Prisma.ConceptTensorGroupByArgs> = z.object({
  where: ConceptTensorWhereInputSchema.optional(),
  orderBy: z.union([ ConceptTensorOrderByWithAggregationInputSchema.array(),ConceptTensorOrderByWithAggregationInputSchema ]).optional(),
  by: ConceptTensorScalarFieldEnumSchema.array(),
  having: ConceptTensorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ConceptTensorGroupByArgsSchema;
