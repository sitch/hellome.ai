import { z } from 'zod'
import { PageArtworkCreateWithoutPageInputObjectSchema } from './PageArtworkCreateWithoutPageInput.schema'
import { PageArtworkUncheckedCreateWithoutPageInputObjectSchema } from './PageArtworkUncheckedCreateWithoutPageInput.schema'
import { PageArtworkCreateOrConnectWithoutPageInputObjectSchema } from './PageArtworkCreateOrConnectWithoutPageInput.schema'
import { PageArtworkCreateManyPageInputEnvelopeObjectSchema } from './PageArtworkCreateManyPageInputEnvelope.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUncheckedCreateNestedManyWithoutPageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageArtworkCreateWithoutPageInputObjectSchema),
          z.lazy(() => PageArtworkCreateWithoutPageInputObjectSchema).array(),
          z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputObjectSchema),
          z
            .lazy(() => PageArtworkUncheckedCreateWithoutPageInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PageArtworkCreateOrConnectWithoutPageInputObjectSchema),
          z
            .lazy(() => PageArtworkCreateOrConnectWithoutPageInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageArtworkCreateManyPageInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const PageArtworkUncheckedCreateNestedManyWithoutPageInputObjectSchema =
  Schema
