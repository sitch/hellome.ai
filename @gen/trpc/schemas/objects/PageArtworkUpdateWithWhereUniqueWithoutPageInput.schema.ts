import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkUpdateWithoutPageInputObjectSchema } from './PageArtworkUpdateWithoutPageInput.schema'
import { PageArtworkUncheckedUpdateWithoutPageInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutPageInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUpdateWithWhereUniqueWithoutPageInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageArtworkUpdateWithoutPageInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedUpdateWithoutPageInputObjectSchema),
      ]),
    })
    .strict()

export const PageArtworkUpdateWithWhereUniqueWithoutPageInputObjectSchema =
  Schema
