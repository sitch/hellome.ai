import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedManyWithoutFamiliesInputSchema } from './UserCreateNestedManyWithoutFamiliesInputSchema';
import { ConceptPlaceCreateNestedManyWithoutFamilyInputSchema } from './ConceptPlaceCreateNestedManyWithoutFamilyInputSchema';
import { ConceptThingCreateNestedManyWithoutFamilyInputSchema } from './ConceptThingCreateNestedManyWithoutFamilyInputSchema';

export const FamilyCreateInputSchema: z.ZodType<Prisma.FamilyCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedManyWithoutFamiliesInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceCreateNestedManyWithoutFamilyInputSchema).optional(),
  things: z.lazy(() => ConceptThingCreateNestedManyWithoutFamilyInputSchema).optional()
}).strict();

export default FamilyCreateInputSchema;
