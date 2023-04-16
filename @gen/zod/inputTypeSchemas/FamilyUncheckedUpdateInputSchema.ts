import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUncheckedUpdateManyWithoutFamiliesNestedInputSchema } from './UserUncheckedUpdateManyWithoutFamiliesNestedInputSchema';
import { ConceptPlaceUncheckedUpdateManyWithoutFamilyNestedInputSchema } from './ConceptPlaceUncheckedUpdateManyWithoutFamilyNestedInputSchema';
import { ConceptThingUncheckedUpdateManyWithoutFamilyNestedInputSchema } from './ConceptThingUncheckedUpdateManyWithoutFamilyNestedInputSchema';

export const FamilyUncheckedUpdateInputSchema: z.ZodType<Prisma.FamilyUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUncheckedUpdateManyWithoutFamiliesNestedInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceUncheckedUpdateManyWithoutFamilyNestedInputSchema).optional(),
  things: z.lazy(() => ConceptThingUncheckedUpdateManyWithoutFamilyNestedInputSchema).optional()
}).strict();

export default FamilyUncheckedUpdateInputSchema;
