import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptTensorWhereUniqueInputSchema } from './ConceptTensorWhereUniqueInputSchema';
import { ConceptTensorCreateWithoutPredictionInputSchema } from './ConceptTensorCreateWithoutPredictionInputSchema';
import { ConceptTensorUncheckedCreateWithoutPredictionInputSchema } from './ConceptTensorUncheckedCreateWithoutPredictionInputSchema';

export const ConceptTensorCreateOrConnectWithoutPredictionInputSchema: z.ZodType<Prisma.ConceptTensorCreateOrConnectWithoutPredictionInput> = z.object({
  where: z.lazy(() => ConceptTensorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConceptTensorCreateWithoutPredictionInputSchema),z.lazy(() => ConceptTensorUncheckedCreateWithoutPredictionInputSchema) ]),
}).strict();

export default ConceptTensorCreateOrConnectWithoutPredictionInputSchema;
