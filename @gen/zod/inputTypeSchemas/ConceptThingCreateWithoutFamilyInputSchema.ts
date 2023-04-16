import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutThingsInputSchema } from './UserCreateNestedOneWithoutThingsInputSchema';

export const ConceptThingCreateWithoutFamilyInputSchema: z.ZodType<Prisma.ConceptThingCreateWithoutFamilyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutThingsInputSchema)
}).strict();

export default ConceptThingCreateWithoutFamilyInputSchema;
