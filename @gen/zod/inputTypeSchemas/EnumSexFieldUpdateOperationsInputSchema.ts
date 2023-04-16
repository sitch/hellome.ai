import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SexSchema } from './SexSchema';

export const EnumSexFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSexFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SexSchema).optional()
}).strict();

export default EnumSexFieldUpdateOperationsInputSchema;
