import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptTensorCreateWithoutPredictionInputSchema } from './ConceptTensorCreateWithoutPredictionInputSchema';
import { ConceptTensorUncheckedCreateWithoutPredictionInputSchema } from './ConceptTensorUncheckedCreateWithoutPredictionInputSchema';
import { ConceptTensorCreateOrConnectWithoutPredictionInputSchema } from './ConceptTensorCreateOrConnectWithoutPredictionInputSchema';
import { ConceptTensorCreateManyPredictionInputEnvelopeSchema } from './ConceptTensorCreateManyPredictionInputEnvelopeSchema';
import { ConceptTensorWhereUniqueInputSchema } from './ConceptTensorWhereUniqueInputSchema';

export const ConceptTensorCreateNestedManyWithoutPredictionInputSchema: z.ZodType<Prisma.ConceptTensorCreateNestedManyWithoutPredictionInput> = z.object({
  create: z.union([ z.lazy(() => ConceptTensorCreateWithoutPredictionInputSchema),z.lazy(() => ConceptTensorCreateWithoutPredictionInputSchema).array(),z.lazy(() => ConceptTensorUncheckedCreateWithoutPredictionInputSchema),z.lazy(() => ConceptTensorUncheckedCreateWithoutPredictionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptTensorCreateOrConnectWithoutPredictionInputSchema),z.lazy(() => ConceptTensorCreateOrConnectWithoutPredictionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptTensorCreateManyPredictionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ConceptTensorWhereUniqueInputSchema),z.lazy(() => ConceptTensorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ConceptTensorCreateNestedManyWithoutPredictionInputSchema;
