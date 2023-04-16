import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPersonIncludeSchema } from '../inputTypeSchemas/ConceptPersonIncludeSchema'
import { ConceptPersonWhereInputSchema } from '../inputTypeSchemas/ConceptPersonWhereInputSchema'
import { ConceptPersonOrderByWithRelationInputSchema } from '../inputTypeSchemas/ConceptPersonOrderByWithRelationInputSchema'
import { ConceptPersonWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptPersonWhereUniqueInputSchema'
import { ConceptPersonScalarFieldEnumSchema } from '../inputTypeSchemas/ConceptPersonScalarFieldEnumSchema'
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

export const ConceptPersonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ConceptPersonFindFirstOrThrowArgs> = z.object({
  select: ConceptPersonSelectSchema.optional(),
  include: ConceptPersonIncludeSchema.optional(),
  where: ConceptPersonWhereInputSchema.optional(),
  orderBy: z.union([ ConceptPersonOrderByWithRelationInputSchema.array(),ConceptPersonOrderByWithRelationInputSchema ]).optional(),
  cursor: ConceptPersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ConceptPersonScalarFieldEnumSchema.array().optional(),
}).strict()

export default ConceptPersonFindFirstOrThrowArgsSchema;
