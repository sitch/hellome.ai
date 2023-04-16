import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedManyWithoutFamiliesInputSchema } from './UserCreateNestedManyWithoutFamiliesInputSchema';
import { ConceptPlaceCreateNestedManyWithoutFamilyInputSchema } from './ConceptPlaceCreateNestedManyWithoutFamilyInputSchema';

export const FamilyCreateWithoutThingsInputSchema: z.ZodType<Prisma.FamilyCreateWithoutThingsInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedManyWithoutFamiliesInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceCreateNestedManyWithoutFamilyInputSchema).optional()
}).strict();

export default FamilyCreateWithoutThingsInputSchema;
