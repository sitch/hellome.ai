import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';
import { ConceptPlaceUpdateWithoutFamilyInputSchema } from './ConceptPlaceUpdateWithoutFamilyInputSchema';
import { ConceptPlaceUncheckedUpdateWithoutFamilyInputSchema } from './ConceptPlaceUncheckedUpdateWithoutFamilyInputSchema';

export const ConceptPlaceUpdateWithWhereUniqueWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptPlaceUpdateWithWhereUniqueWithoutFamilyInput> = z.object({
  where: z.lazy(() => ConceptPlaceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConceptPlaceUpdateWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceUncheckedUpdateWithoutFamilyInputSchema) ]),
}).strict();

export default ConceptPlaceUpdateWithWhereUniqueWithoutFamilyInputSchema;
