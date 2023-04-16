import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateManyWithoutFamiliesNestedInputSchema } from './UserUpdateManyWithoutFamiliesNestedInputSchema';
import { ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema } from './ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema';

export const FamilyUpdateWithoutThingsInputSchema: z.ZodType<Prisma.FamilyUpdateWithoutThingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateManyWithoutFamiliesNestedInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema).optional()
}).strict();

export default FamilyUpdateWithoutThingsInputSchema;
