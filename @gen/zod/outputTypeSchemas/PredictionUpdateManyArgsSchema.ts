import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PredictionUpdateManyMutationInputSchema } from '../inputTypeSchemas/PredictionUpdateManyMutationInputSchema'
import { PredictionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PredictionUncheckedUpdateManyInputSchema'
import { PredictionWhereInputSchema } from '../inputTypeSchemas/PredictionWhereInputSchema'

export const PredictionUpdateManyArgsSchema: z.ZodType<Prisma.PredictionUpdateManyArgs> = z.object({
  data: z.union([ PredictionUpdateManyMutationInputSchema,PredictionUncheckedUpdateManyInputSchema ]),
  where: PredictionWhereInputSchema.optional(),
}).strict()

export default PredictionUpdateManyArgsSchema;
