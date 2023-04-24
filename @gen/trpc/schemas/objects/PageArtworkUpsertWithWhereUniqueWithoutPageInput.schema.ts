import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkUpdateWithoutPageInputObjectSchema } from './PageArtworkUpdateWithoutPageInput.schema'
import { PageArtworkUncheckedUpdateWithoutPageInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutPageInput.schema'
import { PageArtworkCreateWithoutPageInputObjectSchema } from './PageArtworkCreateWithoutPageInput.schema'
import { PageArtworkUncheckedCreateWithoutPageInputObjectSchema } from './PageArtworkUncheckedCreateWithoutPageInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUpsertWithWhereUniqueWithoutPageInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PageArtworkUpdateWithoutPageInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedUpdateWithoutPageInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PageArtworkCreateWithoutPageInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputObjectSchema),
      ]),
    })
    .strict()

export const PageArtworkUpsertWithWhereUniqueWithoutPageInputObjectSchema =
  Schema
