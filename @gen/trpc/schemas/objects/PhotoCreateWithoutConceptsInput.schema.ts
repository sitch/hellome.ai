import { z } from 'zod'
import { PhotoCreatetagsInputObjectSchema } from './PhotoCreatetagsInput.schema'
import { CloudFileCreateNestedOneWithoutPhotoInputObjectSchema } from './CloudFileCreateNestedOneWithoutPhotoInput.schema'
import { PageArtworkCreateNestedManyWithoutPhotoInputObjectSchema } from './PageArtworkCreateNestedManyWithoutPhotoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoCreateWithoutConceptsInput> = z
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
    file: z.lazy(() => CloudFileCreateNestedOneWithoutPhotoInputObjectSchema),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutPhotoInputObjectSchema)
      .optional(),
  })
  .strict()

export const PhotoCreateWithoutConceptsInputObjectSchema = Schema
