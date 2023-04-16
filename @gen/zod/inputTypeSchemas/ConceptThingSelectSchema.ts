import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { FamilyArgsSchema } from "../outputTypeSchemas/FamilyArgsSchema"

export const ConceptThingSelectSchema: z.ZodType<Prisma.ConceptThingSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  familyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Family: z.union([z.boolean(),z.lazy(() => FamilyArgsSchema)]).optional(),
}).strict()

export default ConceptThingSelectSchema;
