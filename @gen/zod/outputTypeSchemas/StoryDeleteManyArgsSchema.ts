import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryWhereInputSchema } from '../inputTypeSchemas/StoryWhereInputSchema'

export const StoryDeleteManyArgsSchema: z.ZodType<Prisma.StoryDeleteManyArgs> = z.object({
  where: StoryWhereInputSchema.optional(),
}).strict()

export default StoryDeleteManyArgsSchema;
