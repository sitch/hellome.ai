import { PageArtworkCreateWithoutArtistInputObjectSchema } from './PageArtworkCreateWithoutArtistInput.schema'
import { PageArtworkUncheckedCreateWithoutArtistInputObjectSchema } from './PageArtworkUncheckedCreateWithoutArtistInput.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkCreateOrConnectWithoutArtistInput> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageArtworkCreateWithoutArtistInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkCreateOrConnectWithoutArtistInputObjectSchema = Schema
