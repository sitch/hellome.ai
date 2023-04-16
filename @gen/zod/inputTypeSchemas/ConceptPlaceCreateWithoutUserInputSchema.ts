import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyCreateNestedOneWithoutPlacesInputSchema } from './FamilyCreateNestedOneWithoutPlacesInputSchema';

export const ConceptPlaceCreateWithoutUserInputSchema: z.ZodType<Prisma.ConceptPlaceCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Family: z.lazy(() => FamilyCreateNestedOneWithoutPlacesInputSchema)
}).strict();

export default ConceptPlaceCreateWithoutUserInputSchema;
