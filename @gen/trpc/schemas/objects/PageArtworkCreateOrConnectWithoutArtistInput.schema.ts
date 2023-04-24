import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkCreateWithoutArtistInputObjectSchema } from './PageArtworkCreateWithoutArtistInput.schema'
import { PageArtworkUncheckedCreateWithoutArtistInputObjectSchema } from './PageArtworkUncheckedCreateWithoutArtistInput.schema'

import type { Prisma } from '@prisma/client'

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
