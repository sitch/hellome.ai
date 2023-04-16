import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilyWhereInputSchema } from '../inputTypeSchemas/FamilyWhereInputSchema'
import { FamilyOrderByWithRelationInputSchema } from '../inputTypeSchemas/FamilyOrderByWithRelationInputSchema'
import { FamilyWhereUniqueInputSchema } from '../inputTypeSchemas/FamilyWhereUniqueInputSchema'

export const FamilyAggregateArgsSchema: z.ZodType<Prisma.FamilyAggregateArgs> = z.object({
  where: FamilyWhereInputSchema.optional(),
  orderBy: z.union([ FamilyOrderByWithRelationInputSchema.array(),FamilyOrderByWithRelationInputSchema ]).optional(),
  cursor: FamilyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default FamilyAggregateArgsSchema;
