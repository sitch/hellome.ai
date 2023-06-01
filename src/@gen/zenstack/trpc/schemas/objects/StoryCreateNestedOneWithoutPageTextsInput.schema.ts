/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateOrConnectWithoutPageTextsInputObjectSchema } from "./StoryCreateOrConnectWithoutPageTextsInput.schema"
import { StoryCreateWithoutPageTextsInputObjectSchema } from "./StoryCreateWithoutPageTextsInput.schema"
import { StoryUncheckedCreateWithoutPageTextsInputObjectSchema } from "./StoryUncheckedCreateWithoutPageTextsInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCreateNestedOneWithoutPageTextsInput,
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
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const StoryCreateNestedOneWithoutPageTextsInputObjectSchema = Schema
