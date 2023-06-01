/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateManyUserInputEnvelopeObjectSchema } from "./EditionCreateManyUserInputEnvelope.schema"
import { EditionCreateOrConnectWithoutUserInputObjectSchema } from "./EditionCreateOrConnectWithoutUserInput.schema"
import { EditionCreateWithoutUserInputObjectSchema } from "./EditionCreateWithoutUserInput.schema"
import { EditionScalarWhereInputObjectSchema } from "./EditionScalarWhereInput.schema"
import { EditionUncheckedCreateWithoutUserInputObjectSchema } from "./EditionUncheckedCreateWithoutUserInput.schema"
import { EditionUpdateManyWithWhereWithoutUserInputObjectSchema } from "./EditionUpdateManyWithWhereWithoutUserInput.schema"
import { EditionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./EditionUpdateWithWhereUniqueWithoutUserInput.schema"
import { EditionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./EditionUpsertWithWhereUniqueWithoutUserInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./EditionWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionUncheckedUpdateManyWithoutUserNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => EditionCreateWithoutUserInputObjectSchema),
        z.lazy(() => EditionCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => EditionUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => EditionUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EditionCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => EditionCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => EditionUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => EditionUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => EditionCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => EditionWhereUniqueInputObjectSchema),
        z.lazy(() => EditionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => EditionWhereUniqueInputObjectSchema),
        z.lazy(() => EditionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => EditionWhereUniqueInputObjectSchema),
        z.lazy(() => EditionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EditionWhereUniqueInputObjectSchema),
        z.lazy(() => EditionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => EditionUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => EditionUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => EditionUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => EditionUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => EditionScalarWhereInputObjectSchema),
        z.lazy(() => EditionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const EditionUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema
