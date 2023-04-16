import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedManyWithoutFamiliesInputSchema } from './UserCreateNestedManyWithoutFamiliesInputSchema';
import { ConceptThingCreateNestedManyWithoutFamilyInputSchema } from './ConceptThingCreateNestedManyWithoutFamilyInputSchema';

export const FamilyCreateWithoutPlacesInputSchema: z.ZodType<Prisma.FamilyCreateWithoutPlacesInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedManyWithoutFamiliesInputSchema).optional(),
  things: z.lazy(() => ConceptThingCreateNestedManyWithoutFamilyInputSchema).optional()
}).strict();

export default FamilyCreateWithoutPlacesInputSchema;
