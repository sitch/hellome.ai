import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPlaceWhereInputSchema } from '../inputTypeSchemas/ConceptPlaceWhereInputSchema'
import { ConceptPlaceOrderByWithRelationInputSchema } from '../inputTypeSchemas/ConceptPlaceOrderByWithRelationInputSchema'
import { ConceptPlaceWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptPlaceWhereUniqueInputSchema'

export const ConceptPlaceAggregateArgsSchema: z.ZodType<Prisma.ConceptPlaceAggregateArgs> = z.object({
  where: ConceptPlaceWhereInputSchema.optional(),
  orderBy: z.union([ ConceptPlaceOrderByWithRelationInputSchema.array(),ConceptPlaceOrderByWithRelationInputSchema ]).optional(),
  cursor: ConceptPlaceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ConceptPlaceAggregateArgsSchema;
