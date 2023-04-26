import { PageArtworkUncheckedUpdateWithoutPhotoInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutPhotoInput.schema'
import { PageArtworkUpdateWithoutPhotoInputObjectSchema } from './PageArtworkUpdateWithoutPhotoInput.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
