import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptTensorCreateWithoutPredictionInputSchema } from './ConceptTensorCreateWithoutPredictionInputSchema';
import { ConceptTensorUncheckedCreateWithoutPredictionInputSchema } from './ConceptTensorUncheckedCreateWithoutPredictionInputSchema';
import { ConceptTensorCreateOrConnectWithoutPredictionInputSchema } from './ConceptTensorCreateOrConnectWithoutPredictionInputSchema';
import { ConceptTensorUpsertWithWhereUniqueWithoutPredictionInputSchema } from './ConceptTensorUpsertWithWhereUniqueWithoutPredictionInputSchema';
import { ConceptTensorCreateManyPredictionInputEnvelopeSchema } from './ConceptTensorCreateManyPredictionInputEnvelopeSchema';
import { ConceptTensorWhereUniqueInputSchema } from './ConceptTensorWhereUniqueInputSchema';
import { ConceptTensorUpdateWithWhereUniqueWithoutPredictionInputSchema } from './ConceptTensorUpdateWithWhereUniqueWithoutPredictionInputSchema';
import { ConceptTensorUpdateManyWithWhereWithoutPredictionInputSchema } from './ConceptTensorUpdateManyWithWhereWithoutPredictionInputSchema';
import { ConceptTensorScalarWhereInputSchema } from './ConceptTensorScalarWhereInputSchema';

export const ConceptTensorUncheckedUpdateManyWithoutPredictionNestedInputSchema: z.ZodType<Prisma.ConceptTensorUncheckedUpdateManyWithoutPredictionNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptTensorCreateWithoutPredictionInputSchema),z.lazy(() => ConceptTensorCreateWithoutPredictionInputSchema).array(),z.lazy(() => ConceptTensorUncheckedCreateWithoutPredictionInputSchema),z.lazy(() => ConceptTensorUncheckedCreateWithoutPredictionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptTensorCreateOrConnectWithoutPredictionInputSchema),z.lazy(() => ConceptTensorCreateOrConnectWithoutPredictionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConceptTensorUpsertWithWhereUniqueWithoutPredictionInputSchema),z.lazy(() => ConceptTensorUpsertWithWhereUniqueWithoutPredictionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptTensorCreateManyPredictionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ConceptTensorWhereUniqueInputSchema),z.lazy(() => ConceptTensorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConceptTensorWhereUniqueInputSchema),z.lazy(() => ConceptTensorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConceptTensorWhereUniqueInputSchema),z.lazy(() => ConceptTensorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConceptTensorWhereUniqueInputSchema),z.lazy(() => ConceptTensorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConceptTensorUpdateWithWhereUniqueWithoutPredictionInputSchema),z.lazy(() => ConceptTensorUpdateWithWhereUniqueWithoutPredictionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConceptTensorUpdateManyWithWhereWithoutPredictionInputSchema),z.lazy(() => ConceptTensorUpdateManyWithWhereWithoutPredictionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConceptTensorScalarWhereInputSchema),z.lazy(() => ConceptTensorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ConceptTensorUncheckedUpdateManyWithoutPredictionNestedInputSchema;
