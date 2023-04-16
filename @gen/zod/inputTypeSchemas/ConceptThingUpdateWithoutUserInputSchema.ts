import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { FamilyUpdateOneRequiredWithoutThingsNestedInputSchema } from './FamilyUpdateOneRequiredWithoutThingsNestedInputSchema';

export const ConceptThingUpdateWithoutUserInputSchema: z.ZodType<Prisma.ConceptThingUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Family: z.lazy(() => FamilyUpdateOneRequiredWithoutThingsNestedInputSchema).optional()
}).strict();

export default ConceptThingUpdateWithoutUserInputSchema;
