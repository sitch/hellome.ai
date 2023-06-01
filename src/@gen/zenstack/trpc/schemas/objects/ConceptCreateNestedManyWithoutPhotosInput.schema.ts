/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCreateOrConnectWithoutPhotosInputObjectSchema } from "./ConceptCreateOrConnectWithoutPhotosInput.schema"
import { ConceptCreateWithoutPhotosInputObjectSchema } from "./ConceptCreateWithoutPhotosInput.schema"
import { ConceptUncheckedCreateWithoutPhotosInputObjectSchema } from "./ConceptUncheckedCreateWithoutPhotosInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptCreateNestedManyWithoutPhotosInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => ConceptCreateWithoutPhotosInputObjectSchema),
        z.lazy(() => ConceptCreateWithoutPhotosInputObjectSchema).array(),
        z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputObjectSchema),
        z
          .lazy(() => ConceptUncheckedCreateWithoutPhotosInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ConceptCreateOrConnectWithoutPhotosInputObjectSchema),
        z
          .lazy(() => ConceptCreateOrConnectWithoutPhotosInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ConceptWhereUniqueInputObjectSchema),
        z.lazy(() => ConceptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const ConceptCreateNestedManyWithoutPhotosInputObjectSchema = Schema
