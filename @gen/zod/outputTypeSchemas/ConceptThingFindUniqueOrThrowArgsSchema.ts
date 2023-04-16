import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptThingIncludeSchema } from '../inputTypeSchemas/ConceptThingIncludeSchema'
import { ConceptThingWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptThingWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { FamilyArgsSchema } from "../outputTypeSchemas/FamilyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConceptThingSelectSchema: z.ZodType<Prisma.ConceptThingSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  familyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Family: z.union([z.boolean(),z.lazy(() => FamilyArgsSchema)]).optional(),
}).strict()

export const ConceptThingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ConceptThingFindUniqueOrThrowArgs> = z.object({
  select: ConceptThingSelectSchema.optional(),
  include: ConceptThingIncludeSchema.optional(),
  where: ConceptThingWhereUniqueInputSchema,
}).strict()

export default ConceptThingFindUniqueOrThrowArgsSchema;
