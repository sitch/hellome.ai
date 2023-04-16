import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { ConceptPlaceFindManyArgsSchema } from "../outputTypeSchemas/ConceptPlaceFindManyArgsSchema"
import { ConceptThingFindManyArgsSchema } from "../outputTypeSchemas/ConceptThingFindManyArgsSchema"
import { FamilyCountOutputTypeArgsSchema } from "../outputTypeSchemas/FamilyCountOutputTypeArgsSchema"

export const FamilyIncludeSchema: z.ZodType<Prisma.FamilyInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  places: z.union([z.boolean(),z.lazy(() => ConceptPlaceFindManyArgsSchema)]).optional(),
  things: z.union([z.boolean(),z.lazy(() => ConceptThingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FamilyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default FamilyIncludeSchema;
