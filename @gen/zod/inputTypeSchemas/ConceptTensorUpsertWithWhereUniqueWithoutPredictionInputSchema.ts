import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptTensorWhereUniqueInputSchema } from './ConceptTensorWhereUniqueInputSchema';
import { ConceptTensorUpdateWithoutPredictionInputSchema } from './ConceptTensorUpdateWithoutPredictionInputSchema';
import { ConceptTensorUncheckedUpdateWithoutPredictionInputSchema } from './ConceptTensorUncheckedUpdateWithoutPredictionInputSchema';
import { ConceptTensorCreateWithoutPredictionInputSchema } from './ConceptTensorCreateWithoutPredictionInputSchema';
import { ConceptTensorUncheckedCreateWithoutPredictionInputSchema } from './ConceptTensorUncheckedCreateWithoutPredictionInputSchema';

export const ConceptTensorUpsertWithWhereUniqueWithoutPredictionInputSchema: z.ZodType<Prisma.ConceptTensorUpsertWithWhereUniqueWithoutPredictionInput> = z.object({
  where: z.lazy(() => ConceptTensorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConceptTensorUpdateWithoutPredictionInputSchema),z.lazy(() => ConceptTensorUncheckedUpdateWithoutPredictionInputSchema) ]),
  create: z.union([ z.lazy(() => ConceptTensorCreateWithoutPredictionInputSchema),z.lazy(() => ConceptTensorUncheckedCreateWithoutPredictionInputSchema) ]),
}).strict();

export default ConceptTensorUpsertWithWhereUniqueWithoutPredictionInputSchema;
