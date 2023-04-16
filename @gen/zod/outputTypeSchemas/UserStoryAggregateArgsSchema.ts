import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryWhereInputSchema } from '../inputTypeSchemas/UserStoryWhereInputSchema'
import { UserStoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserStoryOrderByWithRelationInputSchema'
import { UserStoryWhereUniqueInputSchema } from '../inputTypeSchemas/UserStoryWhereUniqueInputSchema'

export const UserStoryAggregateArgsSchema: z.ZodType<Prisma.UserStoryAggregateArgs> = z.object({
  where: UserStoryWhereInputSchema.optional(),
  orderBy: z.union([ UserStoryOrderByWithRelationInputSchema.array(),UserStoryOrderByWithRelationInputSchema ]).optional(),
  cursor: UserStoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default UserStoryAggregateArgsSchema;
