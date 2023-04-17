import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryWhereUniqueInputSchema } from '../inputTypeSchemas/StoryWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

export const StoryDeleteArgsSchema: z.ZodType<Prisma.StoryDeleteArgs> = z.object({
  select: StorySelectSchema.optional(),
  where: StoryWhereUniqueInputSchema,
}).strict()

export default StoryDeleteArgsSchema;
