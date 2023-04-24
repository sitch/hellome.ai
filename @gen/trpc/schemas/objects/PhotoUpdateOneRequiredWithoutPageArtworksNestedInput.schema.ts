import { z } from 'zod'
import { PhotoCreateWithoutPageArtworksInputObjectSchema } from './PhotoCreateWithoutPageArtworksInput.schema'
import { PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema } from './PhotoUncheckedCreateWithoutPageArtworksInput.schema'
import { PhotoCreateOrConnectWithoutPageArtworksInputObjectSchema } from './PhotoCreateOrConnectWithoutPageArtworksInput.schema'
import { PhotoUpsertWithoutPageArtworksInputObjectSchema } from './PhotoUpsertWithoutPageArtworksInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import { PhotoUpdateWithoutPageArtworksInputObjectSchema } from './PhotoUpdateWithoutPageArtworksInput.schema'
import { PhotoUncheckedUpdateWithoutPageArtworksInputObjectSchema } from './PhotoUncheckedUpdateWithoutPageArtworksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUpdateOneRequiredWithoutPageArtworksNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PhotoCreateWithoutPageArtworksInputObjectSchema),
          z.lazy(
            () => PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PhotoCreateOrConnectWithoutPageArtworksInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PhotoUpsertWithoutPageArtworksInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PhotoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PhotoUpdateWithoutPageArtworksInputObjectSchema),
          z.lazy(
            () => PhotoUncheckedUpdateWithoutPageArtworksInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const PhotoUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema =
  Schema