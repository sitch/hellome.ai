import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPersonIncludeSchema } from '../inputTypeSchemas/ConceptPersonIncludeSchema'
import { ConceptPersonCreateInputSchema } from '../inputTypeSchemas/ConceptPersonCreateInputSchema'
import { ConceptPersonUncheckedCreateInputSchema } from '../inputTypeSchemas/ConceptPersonUncheckedCreateInputSchema'
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

export const ConceptPersonCreateArgsSchema: z.ZodType<Prisma.ConceptPersonCreateArgs> = z.object({
  select: ConceptPersonSelectSchema.optional(),
  include: ConceptPersonIncludeSchema.optional(),
  data: z.union([ ConceptPersonCreateInputSchema,ConceptPersonUncheckedCreateInputSchema ]),
}).strict()

export default ConceptPersonCreateArgsSchema;
