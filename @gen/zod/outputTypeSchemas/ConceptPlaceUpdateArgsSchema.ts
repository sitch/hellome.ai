import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPlaceIncludeSchema } from '../inputTypeSchemas/ConceptPlaceIncludeSchema'
import { ConceptPlaceUpdateInputSchema } from '../inputTypeSchemas/ConceptPlaceUpdateInputSchema'
import { ConceptPlaceUncheckedUpdateInputSchema } from '../inputTypeSchemas/ConceptPlaceUncheckedUpdateInputSchema'
import { ConceptPlaceWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptPlaceWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { FamilyArgsSchema } from "../outputTypeSchemas/FamilyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConceptPlaceSelectSchema: z.ZodType<Prisma.ConceptPlaceSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  familyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Family: z.union([z.boolean(),z.lazy(() => FamilyArgsSchema)]).optional(),
}).strict()

export const ConceptPlaceUpdateArgsSchema: z.ZodType<Prisma.ConceptPlaceUpdateArgs> = z.object({
  select: ConceptPlaceSelectSchema.optional(),
  include: ConceptPlaceIncludeSchema.optional(),
  data: z.union([ ConceptPlaceUpdateInputSchema,ConceptPlaceUncheckedUpdateInputSchema ]),
  where: ConceptPlaceWhereUniqueInputSchema,
}).strict()

export default ConceptPlaceUpdateArgsSchema;
