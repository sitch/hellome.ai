import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPersonWhereInputSchema } from '../inputTypeSchemas/ConceptPersonWhereInputSchema'
import { ConceptPersonOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ConceptPersonOrderByWithAggregationInputSchema'
import { ConceptPersonScalarFieldEnumSchema } from '../inputTypeSchemas/ConceptPersonScalarFieldEnumSchema'
import { ConceptPersonScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ConceptPersonScalarWhereWithAggregatesInputSchema'

export const ConceptPersonGroupByArgsSchema: z.ZodType<Prisma.ConceptPersonGroupByArgs> = z.object({
  where: ConceptPersonWhereInputSchema.optional(),
  orderBy: z.union([ ConceptPersonOrderByWithAggregationInputSchema.array(),ConceptPersonOrderByWithAggregationInputSchema ]).optional(),
  by: ConceptPersonScalarFieldEnumSchema.array(),
  having: ConceptPersonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ConceptPersonGroupByArgsSchema;
