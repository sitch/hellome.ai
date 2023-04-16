import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutPlacesInputSchema } from './UserCreateNestedOneWithoutPlacesInputSchema';

export const ConceptPlaceCreateWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptPlaceCreateWithoutFamilyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPlacesInputSchema)
}).strict();

export default ConceptPlaceCreateWithoutFamilyInputSchema;
