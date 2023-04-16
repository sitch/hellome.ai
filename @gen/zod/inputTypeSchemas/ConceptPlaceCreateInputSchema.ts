import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutPlacesInputSchema } from './UserCreateNestedOneWithoutPlacesInputSchema';
import { FamilyCreateNestedOneWithoutPlacesInputSchema } from './FamilyCreateNestedOneWithoutPlacesInputSchema';

export const ConceptPlaceCreateInputSchema: z.ZodType<Prisma.ConceptPlaceCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPlacesInputSchema),
  Family: z.lazy(() => FamilyCreateNestedOneWithoutPlacesInputSchema)
}).strict();

export default ConceptPlaceCreateInputSchema;
