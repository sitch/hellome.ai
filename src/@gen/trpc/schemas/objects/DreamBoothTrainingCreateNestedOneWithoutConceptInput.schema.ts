import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DreamBoothTrainingCreateOrConnectWithoutConceptInputObjectSchema } from "./DreamBoothTrainingCreateOrConnectWithoutConceptInput.schema"
import { DreamBoothTrainingCreateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingCreateWithoutConceptInput.schema"
import { DreamBoothTrainingUncheckedCreateWithoutConceptInputObjectSchema } from "./DreamBoothTrainingUncheckedCreateWithoutConceptInput.schema"
import { DreamBoothTrainingWhereUniqueInputObjectSchema } from "./DreamBoothTrainingWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.DreamBoothTrainingCreateNestedOneWithoutConceptInput> =
  z
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
          () =>
            DreamBoothTrainingCreateOrConnectWithoutConceptInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => DreamBoothTrainingWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict()

export const DreamBoothTrainingCreateNestedOneWithoutConceptInputObjectSchema =
  Schema
