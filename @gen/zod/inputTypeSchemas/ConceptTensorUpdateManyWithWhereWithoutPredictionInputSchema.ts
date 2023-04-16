import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptTensorScalarWhereInputSchema } from './ConceptTensorScalarWhereInputSchema';
import { ConceptTensorUpdateManyMutationInputSchema } from './ConceptTensorUpdateManyMutationInputSchema';
import { ConceptTensorUncheckedUpdateManyWithoutConceptTensorInputSchema } from './ConceptTensorUncheckedUpdateManyWithoutConceptTensorInputSchema';

export const ConceptTensorUpdateManyWithWhereWithoutPredictionInputSchema: z.ZodType<Prisma.ConceptTensorUpdateManyWithWhereWithoutPredictionInput> = z.object({
  where: z.lazy(() => ConceptTensorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConceptTensorUpdateManyMutationInputSchema),z.lazy(() => ConceptTensorUncheckedUpdateManyWithoutConceptTensorInputSchema) ]),
}).strict();

export default ConceptTensorUpdateManyWithWhereWithoutPredictionInputSchema;
