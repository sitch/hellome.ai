import { PageArtworkUncheckedUpdateWithoutPageInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutPageInput.schema'
import { PageArtworkUpdateWithoutPageInputObjectSchema } from './PageArtworkUpdateWithoutPageInput.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
