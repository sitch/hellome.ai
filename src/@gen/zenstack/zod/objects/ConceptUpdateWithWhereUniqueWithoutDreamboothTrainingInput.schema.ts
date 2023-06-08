/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptUncheckedUpdateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUncheckedUpdateWithoutDreamboothTrainingInput.schema"
import { ConceptUpdateWithoutDreamboothTrainingInputObjectSchema } from "./ConceptUpdateWithoutDreamboothTrainingInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptUpdateWithWhereUniqueWithoutDreamboothTrainingInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ConceptUpdateWithoutDreamboothTrainingInputObjectSchema),
      z.lazy(
        () => ConceptUncheckedUpdateWithoutDreamboothTrainingInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const ConceptUpdateWithWhereUniqueWithoutDreamboothTrainingInputObjectSchema =
  Schema
