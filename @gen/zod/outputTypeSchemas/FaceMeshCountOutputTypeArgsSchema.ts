import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshCountOutputTypeSelectSchema } from './FaceMeshCountOutputTypeSelectSchema';

export const FaceMeshCountOutputTypeArgsSchema: z.ZodType<Prisma.FaceMeshCountOutputTypeArgs> = z.object({
  select: z.lazy(() => FaceMeshCountOutputTypeSelectSchema).nullish(),
}).strict();

export default FaceMeshCountOutputTypeSelectSchema;
