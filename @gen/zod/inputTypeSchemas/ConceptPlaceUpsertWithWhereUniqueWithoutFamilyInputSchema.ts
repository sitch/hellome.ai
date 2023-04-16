import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceWhereUniqueInputSchema } from './ConceptPlaceWhereUniqueInputSchema';
import { ConceptPlaceUpdateWithoutFamilyInputSchema } from './ConceptPlaceUpdateWithoutFamilyInputSchema';
import { ConceptPlaceUncheckedUpdateWithoutFamilyInputSchema } from './ConceptPlaceUncheckedUpdateWithoutFamilyInputSchema';
import { ConceptPlaceCreateWithoutFamilyInputSchema } from './ConceptPlaceCreateWithoutFamilyInputSchema';
import { ConceptPlaceUncheckedCreateWithoutFamilyInputSchema } from './ConceptPlaceUncheckedCreateWithoutFamilyInputSchema';

export const ConceptPlaceUpsertWithWhereUniqueWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptPlaceUpsertWithWhereUniqueWithoutFamilyInput> = z.object({
  where: z.lazy(() => ConceptPlaceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConceptPlaceUpdateWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceUncheckedUpdateWithoutFamilyInputSchema) ]),
  create: z.union([ z.lazy(() => ConceptPlaceCreateWithoutFamilyInputSchema),z.lazy(() => ConceptPlaceUncheckedCreateWithoutFamilyInputSchema) ]),
}).strict();

export default ConceptPlaceUpsertWithWhereUniqueWithoutFamilyInputSchema;
