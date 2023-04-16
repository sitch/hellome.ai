import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceCreateNestedManyWithoutFamilyInputSchema } from './ConceptPlaceCreateNestedManyWithoutFamilyInputSchema';
import { ConceptThingCreateNestedManyWithoutFamilyInputSchema } from './ConceptThingCreateNestedManyWithoutFamilyInputSchema';

export const FamilyCreateWithoutUserInputSchema: z.ZodType<Prisma.FamilyCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  places: z.lazy(() => ConceptPlaceCreateNestedManyWithoutFamilyInputSchema).optional(),
  things: z.lazy(() => ConceptThingCreateNestedManyWithoutFamilyInputSchema).optional()
}).strict();

export default FamilyCreateWithoutUserInputSchema;
