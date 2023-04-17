import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryWhereInputSchema } from '../inputTypeSchemas/StoryWhereInputSchema'
import { StoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/StoryOrderByWithRelationInputSchema'
import { StoryWhereUniqueInputSchema } from '../inputTypeSchemas/StoryWhereUniqueInputSchema'
import { StoryScalarFieldEnumSchema } from '../inputTypeSchemas/StoryScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

export const StoryFindManyArgsSchema: z.ZodType<Prisma.StoryFindManyArgs> = z.object({
  select: StorySelectSchema.optional(),
  where: StoryWhereInputSchema.optional(),
  orderBy: z.union([ StoryOrderByWithRelationInputSchema.array(),StoryOrderByWithRelationInputSchema ]).optional(),
  cursor: StoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StoryScalarFieldEnumSchema.array().optional(),
}).strict()

export default StoryFindManyArgsSchema;
