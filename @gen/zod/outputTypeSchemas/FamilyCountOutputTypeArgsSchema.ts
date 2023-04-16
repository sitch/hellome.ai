import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilyCountOutputTypeSelectSchema } from './FamilyCountOutputTypeSelectSchema';

export const FamilyCountOutputTypeArgsSchema: z.ZodType<Prisma.FamilyCountOutputTypeArgs> = z.object({
  select: z.lazy(() => FamilyCountOutputTypeSelectSchema).nullish(),
}).strict();

export default FamilyCountOutputTypeSelectSchema;
