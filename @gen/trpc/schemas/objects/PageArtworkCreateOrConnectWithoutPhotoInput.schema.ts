import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkCreateWithoutPhotoInputObjectSchema } from './PageArtworkCreateWithoutPhotoInput.schema'
import { PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema } from './PageArtworkUncheckedCreateWithoutPhotoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkCreateOrConnectWithoutPhotoInput> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageArtworkCreateWithoutPhotoInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedCreateWithoutPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkCreateOrConnectWithoutPhotoInputObjectSchema = Schema
