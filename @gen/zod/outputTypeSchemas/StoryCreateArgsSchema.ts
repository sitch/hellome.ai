import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryCreateInputSchema } from '../inputTypeSchemas/StoryCreateInputSchema'
import { StoryUncheckedCreateInputSchema } from '../inputTypeSchemas/StoryUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

export const StoryCreateArgsSchema: z.ZodType<Prisma.StoryCreateArgs> = z.object({
  select: StorySelectSchema.optional(),
  data: z.union([ StoryCreateInputSchema,StoryUncheckedCreateInputSchema ]),
}).strict()

export default StoryCreateArgsSchema;
