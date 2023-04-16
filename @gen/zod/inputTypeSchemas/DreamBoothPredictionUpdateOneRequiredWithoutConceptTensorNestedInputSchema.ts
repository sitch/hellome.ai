import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DreamBoothPredictionCreateWithoutConceptTensorInputSchema } from './DreamBoothPredictionCreateWithoutConceptTensorInputSchema';
import { DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema } from './DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema';
import { DreamBoothPredictionCreateOrConnectWithoutConceptTensorInputSchema } from './DreamBoothPredictionCreateOrConnectWithoutConceptTensorInputSchema';
import { DreamBoothPredictionUpsertWithoutConceptTensorInputSchema } from './DreamBoothPredictionUpsertWithoutConceptTensorInputSchema';
import { DreamBoothPredictionWhereUniqueInputSchema } from './DreamBoothPredictionWhereUniqueInputSchema';
import { DreamBoothPredictionUpdateWithoutConceptTensorInputSchema } from './DreamBoothPredictionUpdateWithoutConceptTensorInputSchema';
import { DreamBoothPredictionUncheckedUpdateWithoutConceptTensorInputSchema } from './DreamBoothPredictionUncheckedUpdateWithoutConceptTensorInputSchema';

export const DreamBoothPredictionUpdateOneRequiredWithoutConceptTensorNestedInputSchema: z.ZodType<Prisma.DreamBoothPredictionUpdateOneRequiredWithoutConceptTensorNestedInput> = z.object({
  create: z.union([ z.lazy(() => DreamBoothPredictionCreateWithoutConceptTensorInputSchema),z.lazy(() => DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DreamBoothPredictionCreateOrConnectWithoutConceptTensorInputSchema).optional(),
  upsert: z.lazy(() => DreamBoothPredictionUpsertWithoutConceptTensorInputSchema).optional(),
  connect: z.lazy(() => DreamBoothPredictionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DreamBoothPredictionUpdateWithoutConceptTensorInputSchema),z.lazy(() => DreamBoothPredictionUncheckedUpdateWithoutConceptTensorInputSchema) ]).optional(),
}).strict();

export default DreamBoothPredictionUpdateOneRequiredWithoutConceptTensorNestedInputSchema;
