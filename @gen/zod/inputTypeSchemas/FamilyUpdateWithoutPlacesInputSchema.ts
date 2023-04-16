import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateManyWithoutFamiliesNestedInputSchema } from './UserUpdateManyWithoutFamiliesNestedInputSchema';
import { ConceptThingUpdateManyWithoutFamilyNestedInputSchema } from './ConceptThingUpdateManyWithoutFamilyNestedInputSchema';

export const FamilyUpdateWithoutPlacesInputSchema: z.ZodType<Prisma.FamilyUpdateWithoutPlacesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateManyWithoutFamiliesNestedInputSchema).optional(),
  things: z.lazy(() => ConceptThingUpdateManyWithoutFamilyNestedInputSchema).optional()
}).strict();

export default FamilyUpdateWithoutPlacesInputSchema;
