import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutPersonInputSchema } from './UserCreateNestedOneWithoutPersonInputSchema';

export const ConceptPersonCreateInputSchema: z.ZodType<Prisma.ConceptPersonCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPersonInputSchema)
}).strict();

export default ConceptPersonCreateInputSchema;
