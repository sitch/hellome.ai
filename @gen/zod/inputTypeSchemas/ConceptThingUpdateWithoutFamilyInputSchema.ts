import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutThingsNestedInputSchema } from './UserUpdateOneRequiredWithoutThingsNestedInputSchema';

export const ConceptThingUpdateWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptThingUpdateWithoutFamilyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutThingsNestedInputSchema).optional()
}).strict();

export default ConceptThingUpdateWithoutFamilyInputSchema;
