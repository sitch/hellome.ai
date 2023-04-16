import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryIncludeSchema } from '../inputTypeSchemas/UserStoryIncludeSchema'
import { UserStoryCreateInputSchema } from '../inputTypeSchemas/UserStoryCreateInputSchema'
import { UserStoryUncheckedCreateInputSchema } from '../inputTypeSchemas/UserStoryUncheckedCreateInputSchema'
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

export const UserStoryCreateArgsSchema: z.ZodType<Prisma.UserStoryCreateArgs> = z.object({
  select: UserStorySelectSchema.optional(),
  include: UserStoryIncludeSchema.optional(),
  data: z.union([ UserStoryCreateInputSchema,UserStoryUncheckedCreateInputSchema ]),
}).strict()

export default UserStoryCreateArgsSchema;
