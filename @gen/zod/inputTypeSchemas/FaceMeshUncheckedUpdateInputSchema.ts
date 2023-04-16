import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUncheckedUpdateManyWithoutFaceNestedInputSchema } from './UserUncheckedUpdateManyWithoutFaceNestedInputSchema';

export const FaceMeshUncheckedUpdateInputSchema: z.ZodType<Prisma.FaceMeshUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUncheckedUpdateManyWithoutFaceNestedInputSchema).optional()
}).strict();

export default FaceMeshUncheckedUpdateInputSchema;
