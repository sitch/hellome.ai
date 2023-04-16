import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPersonIncludeSchema } from '../inputTypeSchemas/ConceptPersonIncludeSchema'
import { ConceptPersonWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptPersonWhereUniqueInputSchema'
import { ConceptPersonCreateInputSchema } from '../inputTypeSchemas/ConceptPersonCreateInputSchema'
import { ConceptPersonUncheckedCreateInputSchema } from '../inputTypeSchemas/ConceptPersonUncheckedCreateInputSchema'
import { ConceptPersonUpdateInputSchema } from '../inputTypeSchemas/ConceptPersonUpdateInputSchema'
import { ConceptPersonUncheckedUpdateInputSchema } from '../inputTypeSchemas/ConceptPersonUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConceptPersonSelectSchema: z.ZodType<Prisma.ConceptPersonSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ConceptPersonUpsertArgsSchema: z.ZodType<Prisma.ConceptPersonUpsertArgs> = z.object({
  select: ConceptPersonSelectSchema.optional(),
  include: ConceptPersonIncludeSchema.optional(),
  where: ConceptPersonWhereUniqueInputSchema,
  create: z.union([ ConceptPersonCreateInputSchema,ConceptPersonUncheckedCreateInputSchema ]),
  update: z.union([ ConceptPersonUpdateInputSchema,ConceptPersonUncheckedUpdateInputSchema ]),
}).strict()

export default ConceptPersonUpsertArgsSchema;
