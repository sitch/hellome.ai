import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema } from './ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema';
import { ConceptThingUpdateManyWithoutFamilyNestedInputSchema } from './ConceptThingUpdateManyWithoutFamilyNestedInputSchema';

export const FamilyUpdateWithoutUserInputSchema: z.ZodType<Prisma.FamilyUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  places: z.lazy(() => ConceptPlaceUpdateManyWithoutFamilyNestedInputSchema).optional(),
  things: z.lazy(() => ConceptThingUpdateManyWithoutFamilyNestedInputSchema).optional()
}).strict();

export default FamilyUpdateWithoutUserInputSchema;
