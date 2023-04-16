import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DreamBoothPredictionCreateWithoutConceptTensorInputSchema } from './DreamBoothPredictionCreateWithoutConceptTensorInputSchema';
import { DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema } from './DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema';
import { DreamBoothPredictionCreateOrConnectWithoutConceptTensorInputSchema } from './DreamBoothPredictionCreateOrConnectWithoutConceptTensorInputSchema';
import { DreamBoothPredictionWhereUniqueInputSchema } from './DreamBoothPredictionWhereUniqueInputSchema';

export const DreamBoothPredictionCreateNestedOneWithoutConceptTensorInputSchema: z.ZodType<Prisma.DreamBoothPredictionCreateNestedOneWithoutConceptTensorInput> = z.object({
  create: z.union([ z.lazy(() => DreamBoothPredictionCreateWithoutConceptTensorInputSchema),z.lazy(() => DreamBoothPredictionUncheckedCreateWithoutConceptTensorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DreamBoothPredictionCreateOrConnectWithoutConceptTensorInputSchema).optional(),
  connect: z.lazy(() => DreamBoothPredictionWhereUniqueInputSchema).optional()
}).strict();

export default DreamBoothPredictionCreateNestedOneWithoutConceptTensorInputSchema;
