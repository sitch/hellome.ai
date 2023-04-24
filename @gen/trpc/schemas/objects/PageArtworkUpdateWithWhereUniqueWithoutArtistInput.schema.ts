import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkUpdateWithoutArtistInputObjectSchema } from './PageArtworkUpdateWithoutArtistInput.schema'
import { PageArtworkUncheckedUpdateWithoutArtistInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutArtistInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUpdateWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageArtworkUpdateWithoutArtistInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedUpdateWithoutArtistInputObjectSchema),
      ]),
    })
    .strict()

export const PageArtworkUpdateWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema
