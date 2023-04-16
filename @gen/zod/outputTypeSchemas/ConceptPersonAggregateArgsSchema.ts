import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPersonWhereInputSchema } from '../inputTypeSchemas/ConceptPersonWhereInputSchema'
import { ConceptPersonOrderByWithRelationInputSchema } from '../inputTypeSchemas/ConceptPersonOrderByWithRelationInputSchema'
import { ConceptPersonWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptPersonWhereUniqueInputSchema'

export const ConceptPersonAggregateArgsSchema: z.ZodType<Prisma.ConceptPersonAggregateArgs> = z.object({
  where: ConceptPersonWhereInputSchema.optional(),
  orderBy: z.union([ ConceptPersonOrderByWithRelationInputSchema.array(),ConceptPersonOrderByWithRelationInputSchema ]).optional(),
  cursor: ConceptPersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ConceptPersonAggregateArgsSchema;
