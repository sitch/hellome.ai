import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutFamiliesInputSchema } from './UserUncheckedCreateNestedManyWithoutFamiliesInputSchema';
import { ConceptThingUncheckedCreateNestedManyWithoutFamilyInputSchema } from './ConceptThingUncheckedCreateNestedManyWithoutFamilyInputSchema';

export const FamilyUncheckedCreateWithoutPlacesInputSchema: z.ZodType<Prisma.FamilyUncheckedCreateWithoutPlacesInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserUncheckedCreateNestedManyWithoutFamiliesInputSchema).optional(),
  things: z.lazy(() => ConceptThingUncheckedCreateNestedManyWithoutFamilyInputSchema).optional()
}).strict();

export default FamilyUncheckedCreateWithoutPlacesInputSchema;
