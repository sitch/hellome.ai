import { z } from 'zod'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import { PhotoCreateWithoutPageArtworksInputObjectSchema } from './PhotoCreateWithoutPageArtworksInput.schema'
import { PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema } from './PhotoUncheckedCreateWithoutPageArtworksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoCreateOrConnectWithoutPageArtworksInput> = z
  .object({
    where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoCreateOrConnectWithoutPageArtworksInputObjectSchema = Schema
