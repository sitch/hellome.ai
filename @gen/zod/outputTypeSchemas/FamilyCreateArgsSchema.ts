import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilyIncludeSchema } from '../inputTypeSchemas/FamilyIncludeSchema'
import { FamilyCreateInputSchema } from '../inputTypeSchemas/FamilyCreateInputSchema'
import { FamilyUncheckedCreateInputSchema } from '../inputTypeSchemas/FamilyUncheckedCreateInputSchema'
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { ConceptPlaceFindManyArgsSchema } from "../outputTypeSchemas/ConceptPlaceFindManyArgsSchema"
import { ConceptThingFindManyArgsSchema } from "../outputTypeSchemas/ConceptThingFindManyArgsSchema"
import { FamilyCountOutputTypeArgsSchema } from "../outputTypeSchemas/FamilyCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FamilySelectSchema: z.ZodType<Prisma.FamilySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  places: z.union([z.boolean(),z.lazy(() => ConceptPlaceFindManyArgsSchema)]).optional(),
  things: z.union([z.boolean(),z.lazy(() => ConceptThingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FamilyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FamilyCreateArgsSchema: z.ZodType<Prisma.FamilyCreateArgs> = z.object({
  select: FamilySelectSchema.optional(),
  include: FamilyIncludeSchema.optional(),
  data: z.union([ FamilyCreateInputSchema,FamilyUncheckedCreateInputSchema ]),
}).strict()

export default FamilyCreateArgsSchema;
