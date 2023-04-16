import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';
import { ConceptThingUpdateWithoutFamilyInputSchema } from './ConceptThingUpdateWithoutFamilyInputSchema';
import { ConceptThingUncheckedUpdateWithoutFamilyInputSchema } from './ConceptThingUncheckedUpdateWithoutFamilyInputSchema';

export const ConceptThingUpdateWithWhereUniqueWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptThingUpdateWithWhereUniqueWithoutFamilyInput> = z.object({
  where: z.lazy(() => ConceptThingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConceptThingUpdateWithoutFamilyInputSchema),z.lazy(() => ConceptThingUncheckedUpdateWithoutFamilyInputSchema) ]),
}).strict();

export default ConceptThingUpdateWithWhereUniqueWithoutFamilyInputSchema;
