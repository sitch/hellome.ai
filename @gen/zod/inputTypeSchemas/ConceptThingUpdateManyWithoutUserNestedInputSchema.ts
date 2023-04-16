import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingCreateWithoutUserInputSchema } from './ConceptThingCreateWithoutUserInputSchema';
import { ConceptThingUncheckedCreateWithoutUserInputSchema } from './ConceptThingUncheckedCreateWithoutUserInputSchema';
import { ConceptThingCreateOrConnectWithoutUserInputSchema } from './ConceptThingCreateOrConnectWithoutUserInputSchema';
import { ConceptThingUpsertWithWhereUniqueWithoutUserInputSchema } from './ConceptThingUpsertWithWhereUniqueWithoutUserInputSchema';
import { ConceptThingCreateManyUserInputEnvelopeSchema } from './ConceptThingCreateManyUserInputEnvelopeSchema';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';
import { ConceptThingUpdateWithWhereUniqueWithoutUserInputSchema } from './ConceptThingUpdateWithWhereUniqueWithoutUserInputSchema';
import { ConceptThingUpdateManyWithWhereWithoutUserInputSchema } from './ConceptThingUpdateManyWithWhereWithoutUserInputSchema';
import { ConceptThingScalarWhereInputSchema } from './ConceptThingScalarWhereInputSchema';

export const ConceptThingUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ConceptThingUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptThingCreateWithoutUserInputSchema),z.lazy(() => ConceptThingCreateWithoutUserInputSchema).array(),z.lazy(() => ConceptThingUncheckedCreateWithoutUserInputSchema),z.lazy(() => ConceptThingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptThingCreateOrConnectWithoutUserInputSchema),z.lazy(() => ConceptThingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConceptThingUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ConceptThingUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptThingCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConceptThingUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ConceptThingUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConceptThingUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ConceptThingUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConceptThingScalarWhereInputSchema),z.lazy(() => ConceptThingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ConceptThingUpdateManyWithoutUserNestedInputSchema;
