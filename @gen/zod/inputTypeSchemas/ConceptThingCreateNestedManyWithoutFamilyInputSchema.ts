import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingCreateWithoutFamilyInputSchema } from './ConceptThingCreateWithoutFamilyInputSchema';
import { ConceptThingUncheckedCreateWithoutFamilyInputSchema } from './ConceptThingUncheckedCreateWithoutFamilyInputSchema';
import { ConceptThingCreateOrConnectWithoutFamilyInputSchema } from './ConceptThingCreateOrConnectWithoutFamilyInputSchema';
import { ConceptThingCreateManyFamilyInputEnvelopeSchema } from './ConceptThingCreateManyFamilyInputEnvelopeSchema';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';

export const ConceptThingCreateNestedManyWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptThingCreateNestedManyWithoutFamilyInput> = z.object({
  create: z.union([ z.lazy(() => ConceptThingCreateWithoutFamilyInputSchema),z.lazy(() => ConceptThingCreateWithoutFamilyInputSchema).array(),z.lazy(() => ConceptThingUncheckedCreateWithoutFamilyInputSchema),z.lazy(() => ConceptThingUncheckedCreateWithoutFamilyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptThingCreateOrConnectWithoutFamilyInputSchema),z.lazy(() => ConceptThingCreateOrConnectWithoutFamilyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptThingCreateManyFamilyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ConceptThingCreateNestedManyWithoutFamilyInputSchema;
