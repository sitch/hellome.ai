import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCreateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptCreateWithoutDreamboothTrainingInput.schema"
import { ConceptUncheckedCreateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUncheckedCreateWithoutDreamboothTrainingInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.ConceptCreateOrConnectWithoutDreamboothTrainingInput> =
  z
    .object({
      where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ConceptCreateWithoutDreamboothTrainingInputObjectSchema),
        z.lazy(
          () =>
            ConceptUncheckedCreateWithoutDreamboothTrainingInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const ConceptCreateOrConnectWithoutDreamboothTrainingInputObjectSchema =
  Schema
