import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserStoryUpdateManyWithoutStoryNestedInputSchema } from './UserStoryUpdateManyWithoutStoryNestedInputSchema';

export const StoryUpdateInputSchema: z.ZodType<Prisma.StoryUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UserStory: z.lazy(() => UserStoryUpdateManyWithoutStoryNestedInputSchema).optional()
}).strict();

export default StoryUpdateInputSchema;
