/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateManyStoryInputEnvelopeObjectSchema } from "./PageTextCreateManyStoryInputEnvelope.schema"
import { PageTextCreateOrConnectWithoutStoryInputObjectSchema } from "./PageTextCreateOrConnectWithoutStoryInput.schema"
import { PageTextCreateWithoutStoryInputObjectSchema } from "./PageTextCreateWithoutStoryInput.schema"
import { PageTextScalarWhereInputObjectSchema } from "./PageTextScalarWhereInput.schema"
import { PageTextUncheckedCreateWithoutStoryInputObjectSchema } from "./PageTextUncheckedCreateWithoutStoryInput.schema"
import { PageTextUpdateManyWithWhereWithoutStoryInputObjectSchema } from "./PageTextUpdateManyWithWhereWithoutStoryInput.schema"
import { PageTextUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from "./PageTextUpdateWithWhereUniqueWithoutStoryInput.schema"
import { PageTextUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from "./PageTextUpsertWithWhereUniqueWithoutStoryInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextUncheckedUpdateManyWithoutStoryNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
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
          () => PageTextUpsertWithWhereUniqueWithoutStoryInputObjectSchema,
        ),
        z
          .lazy(
            () => PageTextUpsertWithWhereUniqueWithoutStoryInputObjectSchema,
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
          () => PageTextUpdateWithWhereUniqueWithoutStoryInputObjectSchema,
        ),
        z
          .lazy(
            () => PageTextUpdateWithWhereUniqueWithoutStoryInputObjectSchema,
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

export const PageTextUncheckedUpdateManyWithoutStoryNestedInputObjectSchema =
  Schema
