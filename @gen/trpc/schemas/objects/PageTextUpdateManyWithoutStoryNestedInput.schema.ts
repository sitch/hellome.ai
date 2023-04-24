import { z } from 'zod'
import { PageTextCreateWithoutStoryInputObjectSchema } from './PageTextCreateWithoutStoryInput.schema'
import { PageTextUncheckedCreateWithoutStoryInputObjectSchema } from './PageTextUncheckedCreateWithoutStoryInput.schema'
import { PageTextCreateOrConnectWithoutStoryInputObjectSchema } from './PageTextCreateOrConnectWithoutStoryInput.schema'
import { PageTextUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from './PageTextUpsertWithWhereUniqueWithoutStoryInput.schema'
import { PageTextCreateManyStoryInputEnvelopeObjectSchema } from './PageTextCreateManyStoryInputEnvelope.schema'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from './PageTextUpdateWithWhereUniqueWithoutStoryInput.schema'
import { PageTextUpdateManyWithWhereWithoutStoryInputObjectSchema } from './PageTextUpdateManyWithWhereWithoutStoryInput.schema'
import { PageTextScalarWhereInputObjectSchema } from './PageTextScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextUpdateManyWithoutStoryNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PageTextCreateWithoutStoryInputObjectSchema),
        z.lazy(() => PageTextCreateWithoutStoryInputObjectSchema).array(),
        z.lazy(() => PageTextUncheckedCreateWithoutStoryInputObjectSchema),
        z
          .lazy(() => PageTextUncheckedCreateWithoutStoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PageTextCreateOrConnectWithoutStoryInputObjectSchema),
        z
          .lazy(() => PageTextCreateOrConnectWithoutStoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PageTextUpsertWithWhereUniqueWithoutStoryInputObjectSchema
        ),
        z
          .lazy(
            () => PageTextUpsertWithWhereUniqueWithoutStoryInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PageTextCreateManyStoryInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PageTextWhereUniqueInputObjectSchema),
        z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PageTextWhereUniqueInputObjectSchema),
        z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PageTextWhereUniqueInputObjectSchema),
        z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PageTextWhereUniqueInputObjectSchema),
        z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => PageTextUpdateWithWhereUniqueWithoutStoryInputObjectSchema
        ),
        z
          .lazy(
            () => PageTextUpdateWithWhereUniqueWithoutStoryInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PageTextUpdateManyWithWhereWithoutStoryInputObjectSchema),
        z
          .lazy(() => PageTextUpdateManyWithWhereWithoutStoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PageTextScalarWhereInputObjectSchema),
        z.lazy(() => PageTextScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PageTextUpdateManyWithoutStoryNestedInputObjectSchema = Schema