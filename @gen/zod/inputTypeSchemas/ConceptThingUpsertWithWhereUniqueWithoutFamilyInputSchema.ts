import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';
import { ConceptThingUpdateWithoutFamilyInputSchema } from './ConceptThingUpdateWithoutFamilyInputSchema';
import { ConceptThingUncheckedUpdateWithoutFamilyInputSchema } from './ConceptThingUncheckedUpdateWithoutFamilyInputSchema';
import { ConceptThingCreateWithoutFamilyInputSchema } from './ConceptThingCreateWithoutFamilyInputSchema';
import { ConceptThingUncheckedCreateWithoutFamilyInputSchema } from './ConceptThingUncheckedCreateWithoutFamilyInputSchema';

export const ConceptThingUpsertWithWhereUniqueWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptThingUpsertWithWhereUniqueWithoutFamilyInput> = z.object({
  where: z.lazy(() => ConceptThingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConceptThingUpdateWithoutFamilyInputSchema),z.lazy(() => ConceptThingUncheckedUpdateWithoutFamilyInputSchema) ]),
  create: z.union([ z.lazy(() => ConceptThingCreateWithoutFamilyInputSchema),z.lazy(() => ConceptThingUncheckedCreateWithoutFamilyInputSchema) ]),
}).strict();

export default ConceptThingUpsertWithWhereUniqueWithoutFamilyInputSchema;
