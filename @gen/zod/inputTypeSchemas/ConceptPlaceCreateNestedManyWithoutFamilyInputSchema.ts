import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceCreateWithoutFamilyInputSchema } from './ConceptPlaceCreateWithoutFamilyInputSchema';
import { ConceptPlaceUncheckedCreateWithoutFamilyInputSchema } from './ConceptPlaceUncheckedCreateWithoutFamilyInputSchema';
import { ConceptPlaceCreateOrConnectWithoutFamilyInputSchema } from './ConceptPlaceCreateOrConnectWithoutFamilyInputSchema';
import { ConceptPlaceCreateManyFamilyInputEnvelopeSchema } from './ConceptPlaceCreateManyFamilyInputEnvelopeSchema';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';

export const ConceptPlaceCreateNestedManyWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptPlaceCreateNestedManyWithoutFamilyInput> = z.object({
  create: z.union([ z.lazy(() => ConceptPlaceCreateWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceCreateWithoutFamilyInputSchema).array(),z.lazy(() => ConceptPlaceUncheckedCreateWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceUncheckedCreateWithoutFamilyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptPlaceCreateOrConnectWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceCreateOrConnectWithoutFamilyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptPlaceCreateManyFamilyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ConceptPlaceWhereUniqueInputSchema),z.lazy(() => ConceptPlaceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ConceptPlaceCreateNestedManyWithoutFamilyInputSchema;
