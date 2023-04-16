import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateManyWithoutFamiliesNestedInputSchema } from './UserUpdateManyWithoutFamiliesNestedInputSchema';
import { ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema } from './ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema';
import { ConceptThingUpdateManyWithoutFamilyNestedInputSchema } from './ConceptThingUpdateManyWithoutFamilyNestedInputSchema';

export const FamilyUpdateInputSchema: z.ZodType<Prisma.FamilyUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateManyWithoutFamiliesNestedInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema).optional(),
  things: z.lazy(() => ConceptThingUpdateManyWithoutFamilyNestedInputSchema).optional()
}).strict();

export default FamilyUpdateInputSchema;
