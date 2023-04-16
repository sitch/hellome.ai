import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptTensorWhereUniqueInputSchema } from './ConceptTensorWhereUniqueInputSchema';
import { ConceptTensorUpdateWithoutPredictionInputSchema } from './ConceptTensorUpdateWithoutPredictionInputSchema';
import { ConceptTensorUncheckedUpdateWithoutPredictionInputSchema } from './ConceptTensorUncheckedUpdateWithoutPredictionInputSchema';

export const ConceptTensorUpdateWithWhereUniqueWithoutPredictionInputSchema: z.ZodType<Prisma.ConceptTensorUpdateWithWhereUniqueWithoutPredictionInput> = z.object({
  where: z.lazy(() => ConceptTensorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConceptTensorUpdateWithoutPredictionInputSchema),z.lazy(() => ConceptTensorUncheckedUpdateWithoutPredictionInputSchema) ]),
}).strict();

export default ConceptTensorUpdateWithWhereUniqueWithoutPredictionInputSchema;
