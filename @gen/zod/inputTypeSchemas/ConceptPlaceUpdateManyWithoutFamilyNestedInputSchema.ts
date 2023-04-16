import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceCreateWithoutFamilyInputSchema } from './ConceptPlaceCreateWithoutFamilyInputSchema';
import { ConceptPlaceUncheckedCreateWithoutFamilyInputSchema } from './ConceptPlaceUncheckedCreateWithoutFamilyInputSchema';
import { ConceptPlaceCreateOrConnectWithoutFamilyInputSchema } from './ConceptPlaceCreateOrConnectWithoutFamilyInputSchema';
import { ConceptPlaceUpsertWithWhereUniqueWithoutFamilyInputSchema } from './ConceptPlaceUpsertWithWhereUniqueWithoutFamilyInputSchema';
import { ConceptPlaceCreateManyFamilyInputEnvelopeSchema } from './ConceptPlaceCreateManyFamilyInputEnvelopeSchema';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';
import { ConceptPlaceUpdateWithWhereUniqueWithoutFamilyInputSchema } from './ConceptPlaceUpdateWithWhereUniqueWithoutFamilyInputSchema';
import { ConceptPlaceUpdateManyWithWhereWithoutFamilyInputSchema } from './ConceptPlaceUpdateManyWithWhereWithoutFamilyInputSchema';
import { ConceptPlaceScalarWhereInputSchema } from './ConceptPlaceScalarWhereInputSchema';

export const ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema: z.ZodType<Prisma.ConceptPlaceUpdateManyWithoutFamilyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConceptPlaceCreateWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceCreateWithoutFamilyInputSchema).array(),z.lazy(() => ConceptPlaceUncheckedCreateWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceUncheckedCreateWithoutFamilyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptPlaceCreateOrConnectWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceCreateOrConnectWithoutFamilyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConceptPlaceUpsertWithWhereUniqueWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceUpsertWithWhereUniqueWithoutFamilyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptPlaceCreateManyFamilyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConceptPlaceUpdateWithWhereUniqueWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceUpdateWithWhereUniqueWithoutFamilyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConceptPlaceUpdateManyWithWhereWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceUpdateManyWithWhereWithoutFamilyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConceptPlaceScalarWhereInputSchema),z.lazy(() => ConceptPlaceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema;
