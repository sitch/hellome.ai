import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';
import { ConceptThingCreateWithoutFamilyInputSchema } from './ConceptThingCreateWithoutFamilyInputSchema';
import { ConceptThingUncheckedCreateWithoutFamilyInputSchema } from './ConceptThingUncheckedCreateWithoutFamilyInputSchema';

export const ConceptThingCreateOrConnectWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptThingCreateOrConnectWithoutFamilyInput> = z.object({
  where: z.lazy(() => ConceptThingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConceptThingCreateWithoutFamilyInputSchema),z.lazy(() => ConceptThingUncheckedCreateWithoutFamilyInputSchema) ]),
}).strict();

export default ConceptThingCreateOrConnectWithoutFamilyInputSchema;
