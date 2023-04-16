import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptThingWhereInputSchema } from '../inputTypeSchemas/ConceptThingWhereInputSchema'
import { ConceptThingOrderByWithRelationInputSchema } from '../inputTypeSchemas/ConceptThingOrderByWithRelationInputSchema'
import { ConceptThingWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptThingWhereUniqueInputSchema'

export const ConceptThingAggregateArgsSchema: z.ZodType<Prisma.ConceptThingAggregateArgs> = z.object({
  where: ConceptThingWhereInputSchema.optional(),
  orderBy: z.union([ ConceptThingOrderByWithRelationInputSchema.array(),ConceptThingOrderByWithRelationInputSchema ]).optional(),
  cursor: ConceptThingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ConceptThingAggregateArgsSchema;
