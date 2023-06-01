/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCreateManyDreamboothTrainingInputEnvelopeObjectSchema } from "./ConceptCreateManyDreamboothTrainingInputEnvelope.schema"
import { ConceptCreateOrConnectWithoutDreamboothTrainingInputObjectSchema } from "./ConceptCreateOrConnectWithoutDreamboothTrainingInput.schema"
import { ConceptCreateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptCreateWithoutDreamboothTrainingInput.schema"
import { ConceptUncheckedCreateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUncheckedCreateWithoutDreamboothTrainingInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptUncheckedCreateNestedManyWithoutDreamboothTrainingInput,
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
    createMany: z
      .lazy(() => ConceptCreateManyDreamboothTrainingInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const ConceptUncheckedCreateNestedManyWithoutDreamboothTrainingInputObjectSchema =
  Schema
