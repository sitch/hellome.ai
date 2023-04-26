import { StoryCreateManyAuthorInputEnvelopeObjectSchema } from './StoryCreateManyAuthorInputEnvelope.schema'
import { StoryCreateOrConnectWithoutAuthorInputObjectSchema } from './StoryCreateOrConnectWithoutAuthorInput.schema'
import { StoryCreateWithoutAuthorInputObjectSchema } from './StoryCreateWithoutAuthorInput.schema'
import { StoryScalarWhereInputObjectSchema } from './StoryScalarWhereInput.schema'
import { StoryUncheckedCreateWithoutAuthorInputObjectSchema } from './StoryUncheckedCreateWithoutAuthorInput.schema'
import { StoryUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './StoryUpdateManyWithWhereWithoutAuthorInput.schema'
import { StoryUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './StoryUpdateWithWhereUniqueWithoutAuthorInput.schema'
import { StoryUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './StoryUpsertWithWhereUniqueWithoutAuthorInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryUncheckedUpdateManyWithoutAuthorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoryCreateWithoutAuthorInputObjectSchema),
          z.lazy(() => StoryCreateWithoutAuthorInputObjectSchema).array(),
          z.lazy(() => StoryUncheckedCreateWithoutAuthorInputObjectSchema),
          z
            .lazy(() => StoryUncheckedCreateWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StoryCreateOrConnectWithoutAuthorInputObjectSchema),
          z
            .lazy(() => StoryCreateOrConnectWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => StoryUpsertWithWhereUniqueWithoutAuthorInputObjectSchema
          ),
          z
            .lazy(
              () => StoryUpsertWithWhereUniqueWithoutAuthorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StoryCreateManyAuthorInputEnvelopeObjectSchema)
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
            () => StoryUpdateWithWhereUniqueWithoutAuthorInputObjectSchema
          ),
          z
            .lazy(
              () => StoryUpdateWithWhereUniqueWithoutAuthorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => StoryUpdateManyWithWhereWithoutAuthorInputObjectSchema),
          z
            .lazy(() => StoryUpdateManyWithWhereWithoutAuthorInputObjectSchema)
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

export const StoryUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema =
  Schema
