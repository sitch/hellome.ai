import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DreamBoothPredictionUpdateWithoutConceptTensorInputSchema } from './DreamBoothPredictionUpdateWithoutConceptTensorInputSchema';
import { DreamBoothPredictionUncheckedUpdateWithoutConceptTensorInputSchema } from './DreamBoothPredictionUncheckedUpdateWithoutConceptTensorInputSchema';
import { DreamBoothPredictionCreateWithoutConceptTensorInputSchema } from './DreamBoothPredictionCreateWithoutConceptTensorInputSchema';
import { DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema } from './DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema';

export const DreamBoothPredictionUpsertWithoutConceptTensorInputSchema: z.ZodType<Prisma.DreamBoothPredictionUpsertWithoutConceptTensorInput> = z.object({
  update: z.union([ z.lazy(() => DreamBoothPredictionUpdateWithoutConceptTensorInputSchema),z.lazy(() => DreamBoothPredictionUncheckedUpdateWithoutConceptTensorInputSchema) ]),
  create: z.union([ z.lazy(() => DreamBoothPredictionCreateWithoutConceptTensorInputSchema),z.lazy(() => DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema) ]),
}).strict();

export default DreamBoothPredictionUpsertWithoutConceptTensorInputSchema;
