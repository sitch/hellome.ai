/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptUncheckedUpdateWithoutPhotosInputObjectSchema } from "./ConceptUncheckedUpdateWithoutPhotosInput.schema"
import { ConceptUpdateWithoutPhotosInputObjectSchema } from "./ConceptUpdateWithoutPhotosInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptUpdateWithWhereUniqueWithoutPhotosInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ConceptUpdateWithoutPhotosInputObjectSchema),
      z.lazy(() => ConceptUncheckedUpdateWithoutPhotosInputObjectSchema),
    ]),
  })
  .strict()

export const ConceptUpdateWithWhereUniqueWithoutPhotosInputObjectSchema = Schema
