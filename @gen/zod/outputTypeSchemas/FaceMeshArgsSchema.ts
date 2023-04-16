import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshSelectSchema } from '../inputTypeSchemas/FaceMeshSelectSchema';
import { FaceMeshIncludeSchema } from '../inputTypeSchemas/FaceMeshIncludeSchema';

export const FaceMeshArgsSchema: z.ZodType<Prisma.FaceMeshArgs> = z.object({
  select: z.lazy(() => FaceMeshSelectSchema).optional(),
  include: z.lazy(() => FaceMeshIncludeSchema).optional(),
}).strict();

export default FaceMeshArgsSchema;
