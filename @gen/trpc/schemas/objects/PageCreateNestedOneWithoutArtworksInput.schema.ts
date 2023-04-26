import { PageCreateOrConnectWithoutArtworksInputObjectSchema } from './PageCreateOrConnectWithoutArtworksInput.schema'
import { PageCreateWithoutArtworksInputObjectSchema } from './PageCreateWithoutArtworksInput.schema'
import { PageUncheckedCreateWithoutArtworksInputObjectSchema } from './PageUncheckedCreateWithoutArtworksInput.schema'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageCreateNestedOneWithoutArtworksInput> = z
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
    connect: z.lazy(() => PageWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PageCreateNestedOneWithoutArtworksInputObjectSchema = Schema
