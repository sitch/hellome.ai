import { z } from 'zod'
import { PageCreateWithoutArtworksInputObjectSchema } from './PageCreateWithoutArtworksInput.schema'
import { PageUncheckedCreateWithoutArtworksInputObjectSchema } from './PageUncheckedCreateWithoutArtworksInput.schema'
import { PageCreateOrConnectWithoutArtworksInputObjectSchema } from './PageCreateOrConnectWithoutArtworksInput.schema'
import { PageUpsertWithoutArtworksInputObjectSchema } from './PageUpsertWithoutArtworksInput.schema'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'
import { PageUpdateWithoutArtworksInputObjectSchema } from './PageUpdateWithoutArtworksInput.schema'
import { PageUncheckedUpdateWithoutArtworksInputObjectSchema } from './PageUncheckedUpdateWithoutArtworksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageUpdateOneRequiredWithoutArtworksNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageCreateWithoutArtworksInputObjectSchema),
          z.lazy(() => PageUncheckedCreateWithoutArtworksInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PageCreateOrConnectWithoutArtworksInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PageUpsertWithoutArtworksInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PageWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PageUpdateWithoutArtworksInputObjectSchema),
          z.lazy(() => PageUncheckedUpdateWithoutArtworksInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const PageUpdateOneRequiredWithoutArtworksNestedInputObjectSchema =
  Schema
