import { PageArtworkCreateManyArtistInputEnvelopeObjectSchema } from './PageArtworkCreateManyArtistInputEnvelope.schema'
import { PageArtworkCreateOrConnectWithoutArtistInputObjectSchema } from './PageArtworkCreateOrConnectWithoutArtistInput.schema'
import { PageArtworkCreateWithoutArtistInputObjectSchema } from './PageArtworkCreateWithoutArtistInput.schema'
import { PageArtworkUncheckedCreateWithoutArtistInputObjectSchema } from './PageArtworkUncheckedCreateWithoutArtistInput.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkUncheckedCreateNestedManyWithoutArtistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageArtworkCreateWithoutArtistInputObjectSchema),
          z.lazy(() => PageArtworkCreateWithoutArtistInputObjectSchema).array(),
          z.lazy(
            () => PageArtworkUncheckedCreateWithoutArtistInputObjectSchema
          ),
          z
            .lazy(
              () => PageArtworkUncheckedCreateWithoutArtistInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PageArtworkCreateOrConnectWithoutArtistInputObjectSchema
          ),
          z
            .lazy(
              () => PageArtworkCreateOrConnectWithoutArtistInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageArtworkCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema =
  Schema
