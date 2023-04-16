import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilyWhereInputSchema } from '../inputTypeSchemas/FamilyWhereInputSchema'
import { FamilyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/FamilyOrderByWithAggregationInputSchema'
import { FamilyScalarFieldEnumSchema } from '../inputTypeSchemas/FamilyScalarFieldEnumSchema'
import { FamilyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/FamilyScalarWhereWithAggregatesInputSchema'

export const FamilyGroupByArgsSchema: z.ZodType<Prisma.FamilyGroupByArgs> = z.object({
  where: FamilyWhereInputSchema.optional(),
  orderBy: z.union([ FamilyOrderByWithAggregationInputSchema.array(),FamilyOrderByWithAggregationInputSchema ]).optional(),
  by: FamilyScalarFieldEnumSchema.array(),
  having: FamilyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default FamilyGroupByArgsSchema;
