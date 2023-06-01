/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateOrConnectWithoutPageTextsInputObjectSchema } from "./StoryCreateOrConnectWithoutPageTextsInput.schema"
import { StoryCreateWithoutPageTextsInputObjectSchema } from "./StoryCreateWithoutPageTextsInput.schema"
import { StoryUncheckedCreateWithoutPageTextsInputObjectSchema } from "./StoryUncheckedCreateWithoutPageTextsInput.schema"
import { StoryUncheckedUpdateWithoutPageTextsInputObjectSchema } from "./StoryUncheckedUpdateWithoutPageTextsInput.schema"
import { StoryUpdateWithoutPageTextsInputObjectSchema } from "./StoryUpdateWithoutPageTextsInput.schema"
import { StoryUpsertWithoutPageTextsInputObjectSchema } from "./StoryUpsertWithoutPageTextsInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUpdateOneRequiredWithoutPageTextsNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => StoryCreateWithoutPageTextsInputObjectSchema),
        z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => StoryCreateOrConnectWithoutPageTextsInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => StoryUpsertWithoutPageTextsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => StoryUpdateWithoutPageTextsInputObjectSchema),
        z.lazy(() => StoryUncheckedUpdateWithoutPageTextsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const StoryUpdateOneRequiredWithoutPageTextsNestedInputObjectSchema =
  Schema
