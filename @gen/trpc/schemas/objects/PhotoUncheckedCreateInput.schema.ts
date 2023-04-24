import { z } from 'zod'
import { PhotoCreatetagsInputObjectSchema } from './PhotoCreatetagsInput.schema'
import { PageArtworkUncheckedCreateNestedManyWithoutPhotoInputObjectSchema } from './PageArtworkUncheckedCreateNestedManyWithoutPhotoInput.schema'
import { ConceptUncheckedCreateNestedManyWithoutPhotosInputObjectSchema } from './ConceptUncheckedCreateNestedManyWithoutPhotosInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUncheckedCreateInput> = z
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
    fileId: z.string(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutPhotoInputObjectSchema
      )
      .optional(),
    concepts: z
      .lazy(
        () => ConceptUncheckedCreateNestedManyWithoutPhotosInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const PhotoUncheckedCreateInputObjectSchema = Schema
