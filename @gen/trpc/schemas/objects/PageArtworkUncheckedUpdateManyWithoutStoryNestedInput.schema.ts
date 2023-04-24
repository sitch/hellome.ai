import { z } from 'zod'
import { PageArtworkCreateWithoutStoryInputObjectSchema } from './PageArtworkCreateWithoutStoryInput.schema'
import { PageArtworkUncheckedCreateWithoutStoryInputObjectSchema } from './PageArtworkUncheckedCreateWithoutStoryInput.schema'
import { PageArtworkCreateOrConnectWithoutStoryInputObjectSchema } from './PageArtworkCreateOrConnectWithoutStoryInput.schema'
import { PageArtworkUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from './PageArtworkUpsertWithWhereUniqueWithoutStoryInput.schema'
import { PageArtworkCreateManyStoryInputEnvelopeObjectSchema } from './PageArtworkCreateManyStoryInputEnvelope.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from './PageArtworkUpdateWithWhereUniqueWithoutStoryInput.schema'
import { PageArtworkUpdateManyWithWhereWithoutStoryInputObjectSchema } from './PageArtworkUpdateManyWithWhereWithoutStoryInput.schema'
import { PageArtworkScalarWhereInputObjectSchema } from './PageArtworkScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUncheckedUpdateManyWithoutStoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageArtworkCreateWithoutStoryInputObjectSchema),
          z.lazy(() => PageArtworkCreateWithoutStoryInputObjectSchema).array(),
          z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputObjectSchema),
          z
            .lazy(() => PageArtworkUncheckedCreateWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PageArtworkCreateOrConnectWithoutStoryInputObjectSchema),
          z
            .lazy(() => PageArtworkCreateOrConnectWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => PageArtworkUpsertWithWhereUniqueWithoutStoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PageArtworkUpsertWithWhereUniqueWithoutStoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageArtworkCreateManyStoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
          z.lazy(() => PageArtworkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PageArtworkUpdateWithWhereUniqueWithoutStoryInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PageArtworkUpdateWithWhereUniqueWithoutStoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PageArtworkUpdateManyWithWhereWithoutStoryInputObjectSchema
          ),
          z
            .lazy(
              () => PageArtworkUpdateManyWithWhereWithoutStoryInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PageArtworkScalarWhereInputObjectSchema),
          z.lazy(() => PageArtworkScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const PageArtworkUncheckedUpdateManyWithoutStoryNestedInputObjectSchema =
  Schema
