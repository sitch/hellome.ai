import { PageArtworkCreateWithoutPageInputObjectSchema } from './PageArtworkCreateWithoutPageInput.schema'
import { PageArtworkUncheckedCreateWithoutPageInputObjectSchema } from './PageArtworkUncheckedCreateWithoutPageInput.schema'
import { PageArtworkUncheckedUpdateWithoutPageInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutPageInput.schema'
import { PageArtworkUpdateWithoutPageInputObjectSchema } from './PageArtworkUpdateWithoutPageInput.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
