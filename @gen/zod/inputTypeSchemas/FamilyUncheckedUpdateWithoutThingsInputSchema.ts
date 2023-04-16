import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUncheckedUpdateManyWithoutFamiliesNestedInputSchema } from './UserUncheckedUpdateManyWithoutFamiliesNestedInputSchema';
import { ConceptPlaceUncheckedUpdateManyWithoutFamilyNestedInputSchema } from './ConceptPlaceUncheckedUpdateManyWithoutFamilyNestedInputSchema';

export const FamilyUncheckedUpdateWithoutThingsInputSchema: z.ZodType<Prisma.FamilyUncheckedUpdateWithoutThingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUncheckedUpdateManyWithoutFamiliesNestedInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceUncheckedUpdateManyWithoutFamilyNestedInputSchema).optional()
}).strict();

export default FamilyUncheckedUpdateWithoutThingsInputSchema;
