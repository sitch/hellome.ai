import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutPlacesNestedInputSchema } from './UserUpdateOneRequiredWithoutPlacesNestedInputSchema';
import { FamilyUpdateOneRequiredWithoutPlacesNestedInputSchema } from './FamilyUpdateOneRequiredWithoutPlacesNestedInputSchema';

export const ConceptPlaceUpdateInputSchema: z.ZodType<Prisma.ConceptPlaceUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPlacesNestedInputSchema).optional(),
  Family: z.lazy(() => FamilyUpdateOneRequiredWithoutPlacesNestedInputSchema).optional()
}).strict();

export default ConceptPlaceUpdateInputSchema;
