import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutThingsNestedInputSchema } from './UserUpdateOneRequiredWithoutThingsNestedInputSchema';
import { FamilyUpdateOneRequiredWithoutThingsNestedInputSchema } from './FamilyUpdateOneRequiredWithoutThingsNestedInputSchema';

export const ConceptThingUpdateInputSchema: z.ZodType<Prisma.ConceptThingUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutThingsNestedInputSchema).optional(),
  Family: z.lazy(() => FamilyUpdateOneRequiredWithoutThingsNestedInputSchema).optional()
}).strict();

export default ConceptThingUpdateInputSchema;
