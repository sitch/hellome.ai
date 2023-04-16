import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';
import { ConceptPlaceCreateWithoutFamilyInputSchema } from './ConceptPlaceCreateWithoutFamilyInputSchema';
import { ConceptPlaceUncheckedCreateWithoutFamilyInputSchema } from './ConceptPlaceUncheckedCreateWithoutFamilyInputSchema';

export const ConceptPlaceCreateOrConnectWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptPlaceCreateOrConnectWithoutFamilyInput> = z.object({
  where: z.lazy(() => ConceptPlaceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConceptPlaceCreateWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceUncheckedCreateWithoutFamilyInputSchema) ]),
}).strict();

export default ConceptPlaceCreateOrConnectWithoutFamilyInputSchema;
