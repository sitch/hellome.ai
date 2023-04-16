import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/StoryUpdateManyMutationInputSchema'
import { StoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StoryUncheckedUpdateManyInputSchema'
import { StoryWhereInputSchema } from '../inputTypeSchemas/StoryWhereInputSchema'

export const StoryUpdateManyArgsSchema: z.ZodType<Prisma.StoryUpdateManyArgs> = z.object({
  data: z.union([ StoryUpdateManyMutationInputSchema,StoryUncheckedUpdateManyInputSchema ]),
  where: StoryWhereInputSchema.optional(),
}).strict()

export default StoryUpdateManyArgsSchema;
