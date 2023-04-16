import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptThingWhereInputSchema } from '../inputTypeSchemas/ConceptThingWhereInputSchema'
import { ConceptThingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ConceptThingOrderByWithAggregationInputSchema'
import { ConceptThingScalarFieldEnumSchema } from '../inputTypeSchemas/ConceptThingScalarFieldEnumSchema'
import { ConceptThingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ConceptThingScalarWhereWithAggregatesInputSchema'

export const ConceptThingGroupByArgsSchema: z.ZodType<Prisma.ConceptThingGroupByArgs> = z.object({
  where: ConceptThingWhereInputSchema.optional(),
  orderBy: z.union([ ConceptThingOrderByWithAggregationInputSchema.array(),ConceptThingOrderByWithAggregationInputSchema ]).optional(),
  by: ConceptThingScalarFieldEnumSchema.array(),
  having: ConceptThingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ConceptThingGroupByArgsSchema;
