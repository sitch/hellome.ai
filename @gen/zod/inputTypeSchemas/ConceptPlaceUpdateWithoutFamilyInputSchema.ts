import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutPlacesNestedInputSchema } from './UserUpdateOneRequiredWithoutPlacesNestedInputSchema';

export const ConceptPlaceUpdateWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptPlaceUpdateWithoutFamilyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPlacesNestedInputSchema).optional()
}).strict();

export default ConceptPlaceUpdateWithoutFamilyInputSchema;
