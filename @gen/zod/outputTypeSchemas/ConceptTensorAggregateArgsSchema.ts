import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptTensorWhereInputSchema } from '../inputTypeSchemas/ConceptTensorWhereInputSchema'
import { ConceptTensorOrderByWithRelationInputSchema } from '../inputTypeSchemas/ConceptTensorOrderByWithRelationInputSchema'
import { ConceptTensorWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptTensorWhereUniqueInputSchema'

export const ConceptTensorAggregateArgsSchema: z.ZodType<Prisma.ConceptTensorAggregateArgs> = z.object({
  where: ConceptTensorWhereInputSchema.optional(),
  orderBy: z.union([ ConceptTensorOrderByWithRelationInputSchema.array(),ConceptTensorOrderByWithRelationInputSchema ]).optional(),
  cursor: ConceptTensorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ConceptTensorAggregateArgsSchema;
