import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCreateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptCreateWithoutDreamboothTrainingInput.schema"
import { ConceptUncheckedCreateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUncheckedCreateWithoutDreamboothTrainingInput.schema"
import { ConceptUncheckedUpdateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUncheckedUpdateWithoutDreamboothTrainingInput.schema"
import { ConceptUpdateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUpdateWithoutDreamboothTrainingInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.ConceptUpsertWithWhereUniqueWithoutDreamboothTrainingInput> =
  z
    .object({
      where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ConceptUpdateWithoutDreamboothTrainingInputObjectSchema),
        z.lazy(
          () =>
            ConceptUncheckedUpdateWithoutDreamboothTrainingInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ConceptCreateWithoutDreamboothTrainingInputObjectSchema),
        z.lazy(
          () =>
            ConceptUncheckedCreateWithoutDreamboothTrainingInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const ConceptUpsertWithWhereUniqueWithoutDreamboothTrainingInputObjectSchema =
  Schema
