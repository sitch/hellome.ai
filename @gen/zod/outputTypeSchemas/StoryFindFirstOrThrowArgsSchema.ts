import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryIncludeSchema } from '../inputTypeSchemas/StoryIncludeSchema'
import { StoryWhereInputSchema } from '../inputTypeSchemas/StoryWhereInputSchema'
import { StoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/StoryOrderByWithRelationInputSchema'
import { StoryWhereUniqueInputSchema } from '../inputTypeSchemas/StoryWhereUniqueInputSchema'
import { StoryScalarFieldEnumSchema } from '../inputTypeSchemas/StoryScalarFieldEnumSchema'
import { UserStoryFindManyArgsSchema } from "../outputTypeSchemas/UserStoryFindManyArgsSchema"
import { StoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/StoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  UserStory: z.union([z.boolean(),z.lazy(() => UserStoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StoryFindFirstOrThrowArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  where: StoryWhereInputSchema.optional(),
  orderBy: z.union([ StoryOrderByWithRelationInputSchema.array(),StoryOrderByWithRelationInputSchema ]).optional(),
  cursor: StoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StoryScalarFieldEnumSchema.array().optional(),
}).strict()

export default StoryFindFirstOrThrowArgsSchema;
