/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCreateManyDreamboothTrainingInputEnvelopeObjectSchema } from "./ConceptCreateManyDreamboothTrainingInputEnvelope.schema"
import { ConceptCreateOrConnectWithoutDreamboothTrainingInputObjectSchema } from "./ConceptCreateOrConnectWithoutDreamboothTrainingInput.schema"
import { ConceptCreateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptCreateWithoutDreamboothTrainingInput.schema"
import { ConceptScalarWhereInputObjectSchema } from "./ConceptScalarWhereInput.schema"
import { ConceptUncheckedCreateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUncheckedCreateWithoutDreamboothTrainingInput.schema"
import { ConceptUpdateManyWithWhereWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUpdateManyWithWhereWithoutDreamboothTrainingInput.schema"
import { ConceptUpdateWithWhereUniqueWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUpdateWithWhereUniqueWithoutDreamboothTrainingInput.schema"
import { ConceptUpsertWithWhereUniqueWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUpsertWithWhereUniqueWithoutDreamboothTrainingInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptUpdateManyWithoutDreamboothTrainingNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => ConceptCreateWithoutDreamboothTrainingInputObjectSchema),
        z
          .lazy(() => ConceptCreateWithoutDreamboothTrainingInputObjectSchema)
          .array(),
        z.lazy(
          () =>
            ConceptUncheckedCreateWithoutDreamboothTrainingInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ConceptUncheckedCreateWithoutDreamboothTrainingInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () =>
            ConceptCreateOrConnectWithoutDreamboothTrainingInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ConceptCreateOrConnectWithoutDreamboothTrainingInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () =>
            ConceptUpsertWithWhereUniqueWithoutDreamboothTrainingInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ConceptUpsertWithWhereUniqueWithoutDreamboothTrainingInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ConceptCreateManyDreamboothTrainingInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () =>
            ConceptUpdateWithWhereUniqueWithoutDreamboothTrainingInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ConceptUpdateWithWhereUniqueWithoutDreamboothTrainingInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () =>
            ConceptUpdateManyWithWhereWithoutDreamboothTrainingInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ConceptUpdateManyWithWhereWithoutDreamboothTrainingInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ConceptScalarWhereInputObjectSchema),
        z.lazy(() => ConceptScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const ConceptUpdateManyWithoutDreamboothTrainingNestedInputObjectSchema =
  Schema
