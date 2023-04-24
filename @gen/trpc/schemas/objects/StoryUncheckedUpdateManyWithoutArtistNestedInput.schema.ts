import { z } from 'zod'
import { StoryCreateWithoutArtistInputObjectSchema } from './StoryCreateWithoutArtistInput.schema'
import { StoryUncheckedCreateWithoutArtistInputObjectSchema } from './StoryUncheckedCreateWithoutArtistInput.schema'
import { StoryCreateOrConnectWithoutArtistInputObjectSchema } from './StoryCreateOrConnectWithoutArtistInput.schema'
import { StoryUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from './StoryUpsertWithWhereUniqueWithoutArtistInput.schema'
import { StoryCreateManyArtistInputEnvelopeObjectSchema } from './StoryCreateManyArtistInputEnvelope.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from './StoryUpdateWithWhereUniqueWithoutArtistInput.schema'
import { StoryUpdateManyWithWhereWithoutArtistInputObjectSchema } from './StoryUpdateManyWithWhereWithoutArtistInput.schema'
import { StoryScalarWhereInputObjectSchema } from './StoryScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUncheckedUpdateManyWithoutArtistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoryCreateWithoutArtistInputObjectSchema),
          z.lazy(() => StoryCreateWithoutArtistInputObjectSchema).array(),
          z.lazy(() => StoryUncheckedCreateWithoutArtistInputObjectSchema),
          z
            .lazy(() => StoryUncheckedCreateWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StoryCreateOrConnectWithoutArtistInputObjectSchema),
          z
            .lazy(() => StoryCreateOrConnectWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => StoryUpsertWithWhereUniqueWithoutArtistInputObjectSchema
          ),
          z
            .lazy(
              () => StoryUpsertWithWhereUniqueWithoutArtistInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StoryCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => StoryWhereUniqueInputObjectSchema),
          z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StoryWhereUniqueInputObjectSchema),
          z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StoryWhereUniqueInputObjectSchema),
          z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StoryWhereUniqueInputObjectSchema),
          z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => StoryUpdateWithWhereUniqueWithoutArtistInputObjectSchema
          ),
          z
            .lazy(
              () => StoryUpdateWithWhereUniqueWithoutArtistInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => StoryUpdateManyWithWhereWithoutArtistInputObjectSchema),
          z
            .lazy(() => StoryUpdateManyWithWhereWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StoryScalarWhereInputObjectSchema),
          z.lazy(() => StoryScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const StoryUncheckedUpdateManyWithoutArtistNestedInputObjectSchema =
  Schema
