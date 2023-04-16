import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DreamBoothPredictionWhereUniqueInputSchema } from './DreamBoothPredictionWhereUniqueInputSchema';
import { DreamBoothPredictionCreateWithoutConceptTensorInputSchema } from './DreamBoothPredictionCreateWithoutConceptTensorInputSchema';
import { DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema } from './DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema';

export const DreamBoothPredictionCreateOrConnectWithoutConceptTensorInputSchema: z.ZodType<Prisma.DreamBoothPredictionCreateOrConnectWithoutConceptTensorInput> = z.object({
  where: z.lazy(() => DreamBoothPredictionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DreamBoothPredictionCreateWithoutConceptTensorInputSchema),z.lazy(() => DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema) ]),
}).strict();

export default DreamBoothPredictionCreateOrConnectWithoutConceptTensorInputSchema;
