import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutThingsInputSchema } from './UserCreateNestedOneWithoutThingsInputSchema';
import { FamilyCreateNestedOneWithoutThingsInputSchema } from './FamilyCreateNestedOneWithoutThingsInputSchema';

export const ConceptThingCreateInputSchema: z.ZodType<Prisma.ConceptThingCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutThingsInputSchema),
  Family: z.lazy(() => FamilyCreateNestedOneWithoutThingsInputSchema)
}).strict();

export default ConceptThingCreateInputSchema;
