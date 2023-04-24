import { z } from 'zod'
import { PageTextCreateWithoutTranslatorInputObjectSchema } from './PageTextCreateWithoutTranslatorInput.schema'
import { PageTextUncheckedCreateWithoutTranslatorInputObjectSchema } from './PageTextUncheckedCreateWithoutTranslatorInput.schema'
import { PageTextCreateOrConnectWithoutTranslatorInputObjectSchema } from './PageTextCreateOrConnectWithoutTranslatorInput.schema'
import { PageTextUpsertWithWhereUniqueWithoutTranslatorInputObjectSchema } from './PageTextUpsertWithWhereUniqueWithoutTranslatorInput.schema'
import { PageTextCreateManyTranslatorInputEnvelopeObjectSchema } from './PageTextCreateManyTranslatorInputEnvelope.schema'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextUpdateWithWhereUniqueWithoutTranslatorInputObjectSchema } from './PageTextUpdateWithWhereUniqueWithoutTranslatorInput.schema'
import { PageTextUpdateManyWithWhereWithoutTranslatorInputObjectSchema } from './PageTextUpdateManyWithWhereWithoutTranslatorInput.schema'
import { PageTextScalarWhereInputObjectSchema } from './PageTextScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextUpdateManyWithoutTranslatorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageTextCreateWithoutTranslatorInputObjectSchema),
          z
            .lazy(() => PageTextCreateWithoutTranslatorInputObjectSchema)
            .array(),
          z.lazy(
            () => PageTextUncheckedCreateWithoutTranslatorInputObjectSchema
          ),
          z
            .lazy(
              () => PageTextUncheckedCreateWithoutTranslatorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PageTextCreateOrConnectWithoutTranslatorInputObjectSchema
          ),
          z
            .lazy(
              () => PageTextCreateOrConnectWithoutTranslatorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PageTextUpsertWithWhereUniqueWithoutTranslatorInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PageTextUpsertWithWhereUniqueWithoutTranslatorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageTextCreateManyTranslatorInputEnvelopeObjectSchema)
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
            () =>
              PageTextUpdateWithWhereUniqueWithoutTranslatorInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PageTextUpdateWithWhereUniqueWithoutTranslatorInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PageTextUpdateManyWithWhereWithoutTranslatorInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PageTextUpdateManyWithWhereWithoutTranslatorInputObjectSchema
            )
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

export const PageTextUpdateManyWithoutTranslatorNestedInputObjectSchema = Schema
