import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshArgsSchema } from "../outputTypeSchemas/FaceMeshArgsSchema"
import { FamilyFindManyArgsSchema } from "../outputTypeSchemas/FamilyFindManyArgsSchema"
import { ConceptPersonArgsSchema } from "../outputTypeSchemas/ConceptPersonArgsSchema"
import { ConceptPlaceFindManyArgsSchema } from "../outputTypeSchemas/ConceptPlaceFindManyArgsSchema"
import { ConceptThingFindManyArgsSchema } from "../outputTypeSchemas/ConceptThingFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  face: z.union([z.boolean(),z.lazy(() => FaceMeshArgsSchema)]).optional(),
  families: z.union([z.boolean(),z.lazy(() => FamilyFindManyArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => ConceptPersonArgsSchema)]).optional(),
  places: z.union([z.boolean(),z.lazy(() => ConceptPlaceFindManyArgsSchema)]).optional(),
  things: z.union([z.boolean(),z.lazy(() => ConceptThingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
