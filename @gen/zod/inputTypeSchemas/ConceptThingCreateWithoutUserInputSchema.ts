import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyCreateNestedOneWithoutThingsInputSchema } from './FamilyCreateNestedOneWithoutThingsInputSchema';

export const ConceptThingCreateWithoutUserInputSchema: z.ZodType<Prisma.ConceptThingCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Family: z.lazy(() => FamilyCreateNestedOneWithoutThingsInputSchema)
}).strict();

export default ConceptThingCreateWithoutUserInputSchema;
