import { PageTextCreateManyPageInputEnvelopeObjectSchema } from './PageTextCreateManyPageInputEnvelope.schema'
import { PageTextCreateOrConnectWithoutPageInputObjectSchema } from './PageTextCreateOrConnectWithoutPageInput.schema'
import { PageTextCreateWithoutPageInputObjectSchema } from './PageTextCreateWithoutPageInput.schema'
import { PageTextScalarWhereInputObjectSchema } from './PageTextScalarWhereInput.schema'
import { PageTextUncheckedCreateWithoutPageInputObjectSchema } from './PageTextUncheckedCreateWithoutPageInput.schema'
import { PageTextUpdateManyWithWhereWithoutPageInputObjectSchema } from './PageTextUpdateManyWithWhereWithoutPageInput.schema'
import { PageTextUpdateWithWhereUniqueWithoutPageInputObjectSchema } from './PageTextUpdateWithWhereUniqueWithoutPageInput.schema'
import { PageTextUpsertWithWhereUniqueWithoutPageInputObjectSchema } from './PageTextUpsertWithWhereUniqueWithoutPageInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextUncheckedUpdateManyWithoutPageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageTextCreateWithoutPageInputObjectSchema),
          z.lazy(() => PageTextCreateWithoutPageInputObjectSchema).array(),
          z.lazy(() => PageTextUncheckedCreateWithoutPageInputObjectSchema),
          z
            .lazy(() => PageTextUncheckedCreateWithoutPageInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PageTextCreateOrConnectWithoutPageInputObjectSchema),
          z
            .lazy(() => PageTextCreateOrConnectWithoutPageInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => PageTextUpsertWithWhereUniqueWithoutPageInputObjectSchema
          ),
          z
            .lazy(
              () => PageTextUpsertWithWhereUniqueWithoutPageInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageTextCreateManyPageInputEnvelopeObjectSchema)
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
            () => PageTextUpdateWithWhereUniqueWithoutPageInputObjectSchema
          ),
          z
            .lazy(
              () => PageTextUpdateWithWhereUniqueWithoutPageInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PageTextUpdateManyWithWhereWithoutPageInputObjectSchema),
          z
            .lazy(() => PageTextUpdateManyWithWhereWithoutPageInputObjectSchema)
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

export const PageTextUncheckedUpdateManyWithoutPageNestedInputObjectSchema =
  Schema
