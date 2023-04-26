import { StoryCreateManyArtistInputEnvelopeObjectSchema } from './StoryCreateManyArtistInputEnvelope.schema'
import { StoryCreateOrConnectWithoutArtistInputObjectSchema } from './StoryCreateOrConnectWithoutArtistInput.schema'
import { StoryCreateWithoutArtistInputObjectSchema } from './StoryCreateWithoutArtistInput.schema'
import { StoryUncheckedCreateWithoutArtistInputObjectSchema } from './StoryUncheckedCreateWithoutArtistInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryUncheckedCreateNestedManyWithoutArtistInput> =
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
      createMany: z
        .lazy(() => StoryCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StoryWhereUniqueInputObjectSchema),
          z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema =
  Schema
