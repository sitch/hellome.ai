import { z } from 'zod'
import { StoryCreateWithoutArtistInputObjectSchema } from './StoryCreateWithoutArtistInput.schema'
import { StoryUncheckedCreateWithoutArtistInputObjectSchema } from './StoryUncheckedCreateWithoutArtistInput.schema'
import { StoryCreateOrConnectWithoutArtistInputObjectSchema } from './StoryCreateOrConnectWithoutArtistInput.schema'
import { StoryCreateManyArtistInputEnvelopeObjectSchema } from './StoryCreateManyArtistInputEnvelope.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

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
