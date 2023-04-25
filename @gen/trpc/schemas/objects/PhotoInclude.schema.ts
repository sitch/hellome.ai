import { z } from 'zod'
import { CloudFileArgsObjectSchema } from './CloudFileArgs.schema'
import { PageArtworkFindManySchema } from '../findManyPageArtwork.schema'
import { ConceptFindManySchema } from '../findManyConcept.schema'
import { PhotoCountOutputTypeArgsObjectSchema } from './PhotoCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoInclude> = z
  .object({
    file: z
      .union([z.boolean(), z.lazy(() => CloudFileArgsObjectSchema)])
      .optional(),
    pageArtworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkFindManySchema)])
      .optional(),
    concepts: z
      .union([z.boolean(), z.lazy(() => ConceptFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PhotoCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PhotoIncludeObjectSchema = Schema
