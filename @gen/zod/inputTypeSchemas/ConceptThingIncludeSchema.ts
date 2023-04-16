import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { FamilyArgsSchema } from "../outputTypeSchemas/FamilyArgsSchema"

export const ConceptThingIncludeSchema: z.ZodType<Prisma.ConceptThingInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Family: z.union([z.boolean(),z.lazy(() => FamilyArgsSchema)]).optional(),
}).strict()

export default ConceptThingIncludeSchema;
