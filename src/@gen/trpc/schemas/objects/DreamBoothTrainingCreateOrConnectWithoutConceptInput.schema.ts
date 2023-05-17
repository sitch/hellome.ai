import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DreamBoothTrainingCreateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingCreateWithoutConceptInput.schema"
import { DreamBoothTrainingUncheckedCreateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingUncheckedCreateWithoutConceptInput.schema"
import { DreamBoothTrainingWhereUniqueInputObjectSchema } from "./DreamBoothTrainingWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.DreamBoothTrainingCreateOrConnectWithoutConceptInput> =
  z
    .object({
      where: z.lazy(() => DreamBoothTrainingWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DreamBoothTrainingCreateWithoutConceptInputObjectSchema),
        z.lazy(
          () =>
            DreamBoothTrainingUncheckedCreateWithoutConceptInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const DreamBoothTrainingCreateOrConnectWithoutConceptInputObjectSchema =
  Schema
