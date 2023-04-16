import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { FamilyUpdateOneRequiredWithoutPlacesNestedInputSchema } from './FamilyUpdateOneRequiredWithoutPlacesNestedInputSchema';

export const ConceptPlaceUpdateWithoutUserInputSchema: z.ZodType<Prisma.ConceptPlaceUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Family: z.lazy(() => FamilyUpdateOneRequiredWithoutPlacesNestedInputSchema).optional()
}).strict();

export default ConceptPlaceUpdateWithoutUserInputSchema;
