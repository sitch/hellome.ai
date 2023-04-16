import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryIncludeSchema } from '../inputTypeSchemas/UserStoryIncludeSchema'
import { UserStoryUpdateInputSchema } from '../inputTypeSchemas/UserStoryUpdateInputSchema'
import { UserStoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserStoryUncheckedUpdateInputSchema'
import { UserStoryWhereUniqueInputSchema } from '../inputTypeSchemas/UserStoryWhereUniqueInputSchema'
import { StoryArgsSchema } from "../outputTypeSchemas/StoryArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserStorySelectSchema: z.ZodType<Prisma.UserStorySelect> = z.object({
  id: z.boolean().optional(),
  storyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
}).strict()

export const UserStoryUpdateArgsSchema: z.ZodType<Prisma.UserStoryUpdateArgs> = z.object({
  select: UserStorySelectSchema.optional(),
  include: UserStoryIncludeSchema.optional(),
  data: z.union([ UserStoryUpdateInputSchema,UserStoryUncheckedUpdateInputSchema ]),
  where: UserStoryWhereUniqueInputSchema,
}).strict()

export default UserStoryUpdateArgsSchema;
