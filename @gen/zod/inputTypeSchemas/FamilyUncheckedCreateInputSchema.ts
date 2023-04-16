import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutFamiliesInputSchema } from './UserUncheckedCreateNestedManyWithoutFamiliesInputSchema';
import { ConceptPlaceUncheckedCreateNestedManyWithoutFamilyInputSchema } from './ConceptPlaceUncheckedCreateNestedManyWithoutFamilyInputSchema';
import { ConceptThingUncheckedCreateNestedManyWithoutFamilyInputSchema } from './ConceptThingUncheckedCreateNestedManyWithoutFamilyInputSchema';

export const FamilyUncheckedCreateInputSchema: z.ZodType<Prisma.FamilyUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserUncheckedCreateNestedManyWithoutFamiliesInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceUncheckedCreateNestedManyWithoutFamilyInputSchema).optional(),
  things: z.lazy(() => ConceptThingUncheckedCreateNestedManyWithoutFamilyInputSchema).optional()
}).strict();

export default FamilyUncheckedCreateInputSchema;
