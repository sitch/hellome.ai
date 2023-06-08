/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCreateWithoutPhotosInputObjectSchema } from "./ConceptCreateWithoutPhotosInput.schema"
import { ConceptUncheckedCreateWithoutPhotosInputObjectSchema } from "./ConceptUncheckedCreateWithoutPhotosInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptCreateOrConnectWithoutPhotosInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ConceptCreateWithoutPhotosInputObjectSchema),
      z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputObjectSchema),
    ]),
  })
  .strict()

export const ConceptCreateOrConnectWithoutPhotosInputObjectSchema = Schema
