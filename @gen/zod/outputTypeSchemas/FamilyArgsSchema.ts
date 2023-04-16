import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilySelectSchema } from '../inputTypeSchemas/FamilySelectSchema';
import { FamilyIncludeSchema } from '../inputTypeSchemas/FamilyIncludeSchema';

export const FamilyArgsSchema: z.ZodType<Prisma.FamilyArgs> = z.object({
  select: z.lazy(() => FamilySelectSchema).optional(),
  include: z.lazy(() => FamilyIncludeSchema).optional(),
}).strict();

export default FamilyArgsSchema;
