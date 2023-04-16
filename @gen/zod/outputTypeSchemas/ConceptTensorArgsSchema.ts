import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptTensorSelectSchema } from '../inputTypeSchemas/ConceptTensorSelectSchema';
import { ConceptTensorIncludeSchema } from '../inputTypeSchemas/ConceptTensorIncludeSchema';

export const ConceptTensorArgsSchema: z.ZodType<Prisma.ConceptTensorArgs> = z.object({
  select: z.lazy(() => ConceptTensorSelectSchema).optional(),
  include: z.lazy(() => ConceptTensorIncludeSchema).optional(),
}).strict();

export default ConceptTensorArgsSchema;
