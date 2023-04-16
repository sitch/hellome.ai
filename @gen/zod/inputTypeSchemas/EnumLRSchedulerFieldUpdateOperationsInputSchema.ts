import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LRSchedulerSchema } from './LRSchedulerSchema';

export const EnumLRSchedulerFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLRSchedulerFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LRSchedulerSchema).optional()
}).strict();

export default EnumLRSchedulerFieldUpdateOperationsInputSchema;
