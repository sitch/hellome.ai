import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DreamBoothPredictionUpdateManyMutationInputSchema } from '../inputTypeSchemas/DreamBoothPredictionUpdateManyMutationInputSchema'
import { DreamBoothPredictionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DreamBoothPredictionUncheckedUpdateManyInputSchema'
import { DreamBoothPredictionWhereInputSchema } from '../inputTypeSchemas/DreamBoothPredictionWhereInputSchema'

export const DreamBoothPredictionUpdateManyArgsSchema: z.ZodType<Prisma.DreamBoothPredictionUpdateManyArgs> = z.object({
  data: z.union([ DreamBoothPredictionUpdateManyMutationInputSchema,DreamBoothPredictionUncheckedUpdateManyInputSchema ]),
  where: DreamBoothPredictionWhereInputSchema.optional(),
}).strict()

export default DreamBoothPredictionUpdateManyArgsSchema;
