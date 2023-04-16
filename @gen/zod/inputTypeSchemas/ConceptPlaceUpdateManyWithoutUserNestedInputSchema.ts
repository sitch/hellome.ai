import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceCreateWithoutUserInputSchema } from './ConceptPlaceCreateWithoutUserInputSchema';
import { ConceptPlaceUncheckedCreateWithoutUserInputSchema } from './ConceptPlaceUncheckedCreateWithoutUserInputSchema';
import { ConceptPlaceCreateOrConnectWithoutUserInputSchema } from './ConceptPlaceCreateOrConnectWithoutUserInputSchema';
import { ConceptPlaceUpsertWithWhereUniqueWithoutUserInputSchema } from './ConceptPlaceUpsertWithWhereUniqueWithoutUserInputSchema';
import { ConceptPlaceCreateManyUserInputEnvelopeSchema } from './ConceptPlaceCreateManyUserInputEnvelopeSchema';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';
import { ConceptPlaceUpdateWithWhereUniqueWithoutUserInputSchema } from './ConceptPlaceUpdateWithWhereUniqueWithoutUserInputSchema';
import { ConceptPlaceUpdateManyWithWhereWithoutUserInputSchema } from './ConceptPlaceUpdateManyWithWhereWithoutUserInputSchema';
import { ConceptPlaceScalarWhereInputSchema } from './ConceptPlaceScalarWhereInputSchema';

export const ConceptPlaceUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ConceptPlaceUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptPlaceCreateWithoutUserInputSchema),z.lazy(() => ConceptPlaceCreateWithoutUserInputSchema).array(),z.lazy(() => ConceptPlaceUncheckedCreateWithoutUserInputSchema),z.lazy(() => ConceptPlaceUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptPlaceCreateOrConnectWithoutUserInputSchema),z.lazy(() => ConceptPlaceCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConceptPlaceUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ConceptPlaceUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptPlaceCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConceptPlaceUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ConceptPlaceUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConceptPlaceUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ConceptPlaceUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConceptPlaceScalarWhereInputSchema),z.lazy(() => ConceptPlaceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ConceptPlaceUpdateManyWithoutUserNestedInputSchema;
