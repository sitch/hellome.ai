import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkUpdateWithoutPhotoInputObjectSchema } from './PageArtworkUpdateWithoutPhotoInput.schema'
import { PageArtworkUncheckedUpdateWithoutPhotoInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutPhotoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUpdateWithWhereUniqueWithoutPhotoInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageArtworkUpdateWithoutPhotoInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedUpdateWithoutPhotoInputObjectSchema),
      ]),
    })
    .strict()

export const PageArtworkUpdateWithWhereUniqueWithoutPhotoInputObjectSchema =
  Schema
