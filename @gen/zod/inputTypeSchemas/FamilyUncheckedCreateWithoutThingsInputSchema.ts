import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutFamiliesInputSchema } from './UserUncheckedCreateNestedManyWithoutFamiliesInputSchema';
import { ConceptPlaceUncheckedCreateNestedManyWithoutFamilyInputSchema } from './ConceptPlaceUncheckedCreateNestedManyWithoutFamilyInputSchema';

export const FamilyUncheckedCreateWithoutThingsInputSchema: z.ZodType<Prisma.FamilyUncheckedCreateWithoutThingsInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserUncheckedCreateNestedManyWithoutFamiliesInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceUncheckedCreateNestedManyWithoutFamilyInputSchema).optional()
}).strict();

export default FamilyUncheckedCreateWithoutThingsInputSchema;
