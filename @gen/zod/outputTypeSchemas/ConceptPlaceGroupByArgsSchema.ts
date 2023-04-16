import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPlaceWhereInputSchema } from '../inputTypeSchemas/ConceptPlaceWhereInputSchema'
import { ConceptPlaceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ConceptPlaceOrderByWithAggregationInputSchema'
import { ConceptPlaceScalarFieldEnumSchema } from '../inputTypeSchemas/ConceptPlaceScalarFieldEnumSchema'
import { ConceptPlaceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ConceptPlaceScalarWhereWithAggregatesInputSchema'

export const ConceptPlaceGroupByArgsSchema: z.ZodType<Prisma.ConceptPlaceGroupByArgs> = z.object({
  where: ConceptPlaceWhereInputSchema.optional(),
  orderBy: z.union([ ConceptPlaceOrderByWithAggregationInputSchema.array(),ConceptPlaceOrderByWithAggregationInputSchema ]).optional(),
  by: ConceptPlaceScalarFieldEnumSchema.array(),
  having: ConceptPlaceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ConceptPlaceGroupByArgsSchema;
