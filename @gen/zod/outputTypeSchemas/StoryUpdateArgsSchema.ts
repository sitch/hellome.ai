import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryUpdateInputSchema } from '../inputTypeSchemas/StoryUpdateInputSchema'
import { StoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/StoryUncheckedUpdateInputSchema'
import { StoryWhereUniqueInputSchema } from '../inputTypeSchemas/StoryWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

export const StoryUpdateArgsSchema: z.ZodType<Prisma.StoryUpdateArgs> = z.object({
  select: StorySelectSchema.optional(),
  data: z.union([ StoryUpdateInputSchema,StoryUncheckedUpdateInputSchema ]),
  where: StoryWhereUniqueInputSchema,
}).strict()

export default StoryUpdateArgsSchema;
