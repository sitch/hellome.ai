import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUncheckedUpdateManyWithoutFamiliesNestedInputSchema } from './UserUncheckedUpdateManyWithoutFamiliesNestedInputSchema';
import { ConceptThingUncheckedUpdateManyWithoutFamilyNestedInputSchema } from './ConceptThingUncheckedUpdateManyWithoutFamilyNestedInputSchema';

export const FamilyUncheckedUpdateWithoutPlacesInputSchema: z.ZodType<Prisma.FamilyUncheckedUpdateWithoutPlacesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUncheckedUpdateManyWithoutFamiliesNestedInputSchema).optional(),
  things: z.lazy(() => ConceptThingUncheckedUpdateManyWithoutFamilyNestedInputSchema).optional()
}).strict();

export default FamilyUncheckedUpdateWithoutPlacesInputSchema;
