import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserStoryUncheckedUpdateManyWithoutStoryNestedInputSchema } from './UserStoryUncheckedUpdateManyWithoutStoryNestedInputSchema';

export const StoryUncheckedUpdateInputSchema: z.ZodType<Prisma.StoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UserStory: z.lazy(() => UserStoryUncheckedUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export default StoryUncheckedUpdateInputSchema;
