import { PageCreateWithoutArtworksInputObjectSchema } from './PageCreateWithoutArtworksInput.schema'
import { PageUncheckedCreateWithoutArtworksInputObjectSchema } from './PageUncheckedCreateWithoutArtworksInput.schema'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageCreateOrConnectWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => PageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => PageUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const PageCreateOrConnectWithoutArtworksInputObjectSchema = Schema
