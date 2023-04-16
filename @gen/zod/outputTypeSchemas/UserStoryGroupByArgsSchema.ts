import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryWhereInputSchema } from '../inputTypeSchemas/UserStoryWhereInputSchema'
import { UserStoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UserStoryOrderByWithAggregationInputSchema'
import { UserStoryScalarFieldEnumSchema } from '../inputTypeSchemas/UserStoryScalarFieldEnumSchema'
import { UserStoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UserStoryScalarWhereWithAggregatesInputSchema'

export const UserStoryGroupByArgsSchema: z.ZodType<Prisma.UserStoryGroupByArgs> = z.object({
  where: UserStoryWhereInputSchema.optional(),
  orderBy: z.union([ UserStoryOrderByWithAggregationInputSchema.array(),UserStoryOrderByWithAggregationInputSchema ]).optional(),
  by: UserStoryScalarFieldEnumSchema.array(),
  having: UserStoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default UserStoryGroupByArgsSchema;
