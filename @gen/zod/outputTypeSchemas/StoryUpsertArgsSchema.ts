import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryWhereUniqueInputSchema } from '../inputTypeSchemas/StoryWhereUniqueInputSchema'
import { StoryCreateInputSchema } from '../inputTypeSchemas/StoryCreateInputSchema'
import { StoryUncheckedCreateInputSchema } from '../inputTypeSchemas/StoryUncheckedCreateInputSchema'
import { StoryUpdateInputSchema } from '../inputTypeSchemas/StoryUpdateInputSchema'
import { StoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/StoryUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

export const StoryUpsertArgsSchema: z.ZodType<Prisma.StoryUpsertArgs> = z.object({
  select: StorySelectSchema.optional(),
  where: StoryWhereUniqueInputSchema,
  create: z.union([ StoryCreateInputSchema,StoryUncheckedCreateInputSchema ]),
  update: z.union([ StoryUpdateInputSchema,StoryUncheckedUpdateInputSchema ]),
}).strict()

export default StoryUpsertArgsSchema;
