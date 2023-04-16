import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceUncheckedCreateNestedManyWithoutFamilyInputSchema } from './ConceptPlaceUncheckedCreateNestedManyWithoutFamilyInputSchema';
import { ConceptThingUncheckedCreateNestedManyWithoutFamilyInputSchema } from './ConceptThingUncheckedCreateNestedManyWithoutFamilyInputSchema';

export const FamilyUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.FamilyUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  places: z.lazy(() => ConceptPlaceUncheckedCreateNestedManyWithoutFamilyInputSchema).optional(),
  things: z.lazy(() => ConceptThingUncheckedCreateNestedManyWithoutFamilyInputSchema).optional()
}).strict();

export default FamilyUncheckedCreateWithoutUserInputSchema;
