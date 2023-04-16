import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingCreateWithoutFamilyInputSchema } from './ConceptThingCreateWithoutFamilyInputSchema';
import { ConceptThingUncheckedCreateWithoutFamilyInputSchema } from './ConceptThingUncheckedCreateWithoutFamilyInputSchema';
import { ConceptThingCreateOrConnectWithoutFamilyInputSchema } from './ConceptThingCreateOrConnectWithoutFamilyInputSchema';
import { ConceptThingUpsertWithWhereUniqueWithoutFamilyInputSchema } from './ConceptThingUpsertWithWhereUniqueWithoutFamilyInputSchema';
import { ConceptThingCreateManyFamilyInputEnvelopeSchema } from './ConceptThingCreateManyFamilyInputEnvelopeSchema';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';
import { ConceptThingUpdateWithWhereUniqueWithoutFamilyInputSchema } from './ConceptThingUpdateWithWhereUniqueWithoutFamilyInputSchema';
import { ConceptThingUpdateManyWithWhereWithoutFamilyInputSchema } from './ConceptThingUpdateManyWithWhereWithoutFamilyInputSchema';
import { ConceptThingScalarWhereInputSchema } from './ConceptThingScalarWhereInputSchema';

export const ConceptThingUpdateManyWithoutFamilyNestedInputSchema: z.ZodType<Prisma.ConceptThingUpdateManyWithoutFamilyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptThingCreateWithoutFamilyInputSchema),z.lazy(() => ConceptThingCreateWithoutFamilyInputSchema).array(),z.lazy(() => ConceptThingUncheckedCreateWithoutFamilyInputSchema),z.lazy(() => ConceptThingUncheckedCreateWithoutFamilyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptThingCreateOrConnectWithoutFamilyInputSchema),z.lazy(() => ConceptThingCreateOrConnectWithoutFamilyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConceptThingUpsertWithWhereUniqueWithoutFamilyInputSchema),z.lazy(() => ConceptThingUpsertWithWhereUniqueWithoutFamilyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptThingCreateManyFamilyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConceptThingUpdateWithWhereUniqueWithoutFamilyInputSchema),z.lazy(() => ConceptThingUpdateWithWhereUniqueWithoutFamilyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConceptThingUpdateManyWithWhereWithoutFamilyInputSchema),z.lazy(() => ConceptThingUpdateManyWithWhereWithoutFamilyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConceptThingScalarWhereInputSchema),z.lazy(() => ConceptThingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ConceptThingUpdateManyWithoutFamilyNestedInputSchema;
