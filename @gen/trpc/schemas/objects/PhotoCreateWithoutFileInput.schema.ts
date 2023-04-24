import { z } from 'zod'
import { PhotoCreatetagsInputObjectSchema } from './PhotoCreatetagsInput.schema'
import { PageArtworkCreateNestedManyWithoutPhotoInputObjectSchema } from './PageArtworkCreateNestedManyWithoutPhotoInput.schema'
import { ConceptCreateNestedManyWithoutPhotosInputObjectSchema } from './ConceptCreateNestedManyWithoutPhotosInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoCreateWithoutFileInput> = z
  .object({
    id: z.string().optional(),
    height: z.number(),
    width: z.number(),
    tags: z
      .union([
        z.lazy(() => PhotoCreatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    createdAt: z.date().optional(),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutPhotoInputObjectSchema)
      .optional(),
    concepts: z
      .lazy(() => ConceptCreateNestedManyWithoutPhotosInputObjectSchema)
      .optional(),
  })
  .strict()

export const PhotoCreateWithoutFileInputObjectSchema = Schema
