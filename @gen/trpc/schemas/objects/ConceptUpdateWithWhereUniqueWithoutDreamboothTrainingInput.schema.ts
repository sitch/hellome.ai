import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptUncheckedUpdateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUncheckedUpdateWithoutDreamboothTrainingInput.schema"
import { ConceptUpdateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUpdateWithoutDreamboothTrainingInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.ConceptUpdateWithWhereUniqueWithoutDreamboothTrainingInput> =
  z
    .object({
      where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ConceptUpdateWithoutDreamboothTrainingInputObjectSchema),
        z.lazy(
          () =>
            ConceptUncheckedUpdateWithoutDreamboothTrainingInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const ConceptUpdateWithWhereUniqueWithoutDreamboothTrainingInputObjectSchema =
  Schema
