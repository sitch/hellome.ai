import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkUpdateWithoutPhotoInputObjectSchema } from './PageArtworkUpdateWithoutPhotoInput.schema'
import { PageArtworkUncheckedUpdateWithoutPhotoInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutPhotoInput.schema'
import { PageArtworkCreateWithoutPhotoInputObjectSchema } from './PageArtworkCreateWithoutPhotoInput.schema'
import { PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema } from './PageArtworkUncheckedCreateWithoutPhotoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUpsertWithWhereUniqueWithoutPhotoInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PageArtworkUpdateWithoutPhotoInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedUpdateWithoutPhotoInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PageArtworkCreateWithoutPhotoInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema),
      ]),
    })
    .strict()

export const PageArtworkUpsertWithWhereUniqueWithoutPhotoInputObjectSchema =
  Schema
