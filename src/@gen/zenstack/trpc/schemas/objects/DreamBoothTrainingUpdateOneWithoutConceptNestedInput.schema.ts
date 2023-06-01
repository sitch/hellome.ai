/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DreamBoothTrainingCreateOrConnectWithoutConceptInputObjectSchema } from "./DreamBoothTrainingCreateOrConnectWithoutConceptInput.schema"
import { DreamBoothTrainingCreateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingCreateWithoutConceptInput.schema"
import { DreamBoothTrainingUncheckedCreateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingUncheckedCreateWithoutConceptInput.schema"
import { DreamBoothTrainingUncheckedUpdateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingUncheckedUpdateWithoutConceptInput.schema"
import { DreamBoothTrainingUpdateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingUpdateWithoutConceptInput.schema"
import { DreamBoothTrainingUpsertWithoutConceptInputObjectSchema } from "./DreamBoothTrainingUpsertWithoutConceptInput.schema"
import { DreamBoothTrainingWhereUniqueInputObjectSchema } from "./DreamBoothTrainingWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingUpdateOneWithoutConceptNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => DreamBoothTrainingCreateWithoutConceptInputObjectSchema),
        z.lazy(
          () =>
            DreamBoothTrainingUncheckedCreateWithoutConceptInputObjectSchema,
        ),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(
        () => DreamBoothTrainingCreateOrConnectWithoutConceptInputObjectSchema,
      )
      .optional(),
    upsert: z
      .lazy(() => DreamBoothTrainingUpsertWithoutConceptInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z
      .lazy(() => DreamBoothTrainingWhereUniqueInputObjectSchema)
      .optional(),
    update: z
      .union([
        z.lazy(() => DreamBoothTrainingUpdateWithoutConceptInputObjectSchema),
        z.lazy(
          () =>
            DreamBoothTrainingUncheckedUpdateWithoutConceptInputObjectSchema,
        ),
      ])
      .optional(),
  })
  .strict()

export const DreamBoothTrainingUpdateOneWithoutConceptNestedInputObjectSchema =
  Schema
