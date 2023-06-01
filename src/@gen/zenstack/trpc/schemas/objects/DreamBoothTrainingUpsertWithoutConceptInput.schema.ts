/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DreamBoothTrainingCreateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingCreateWithoutConceptInput.schema"
import { DreamBoothTrainingUncheckedCreateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingUncheckedCreateWithoutConceptInput.schema"
import { DreamBoothTrainingUncheckedUpdateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingUncheckedUpdateWithoutConceptInput.schema"
import { DreamBoothTrainingUpdateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingUpdateWithoutConceptInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingUpsertWithoutConceptInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => DreamBoothTrainingUpdateWithoutConceptInputObjectSchema),
      z.lazy(
        () => DreamBoothTrainingUncheckedUpdateWithoutConceptInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => DreamBoothTrainingCreateWithoutConceptInputObjectSchema),
      z.lazy(
        () => DreamBoothTrainingUncheckedCreateWithoutConceptInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const DreamBoothTrainingUpsertWithoutConceptInputObjectSchema = Schema
