import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkCreateWithoutPageInputObjectSchema } from './PageArtworkCreateWithoutPageInput.schema'
import { PageArtworkUncheckedCreateWithoutPageInputObjectSchema } from './PageArtworkUncheckedCreateWithoutPageInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkCreateOrConnectWithoutPageInput> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageArtworkCreateWithoutPageInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkCreateOrConnectWithoutPageInputObjectSchema = Schema
