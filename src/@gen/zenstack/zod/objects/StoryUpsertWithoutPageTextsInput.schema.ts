/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateWithoutPageTextsInputObjectSchema } from "./StoryCreateWithoutPageTextsInput.schema"
import { StoryUncheckedCreateWithoutPageTextsInputObjectSchema } from "./StoryUncheckedCreateWithoutPageTextsInput.schema"
import { StoryUncheckedUpdateWithoutPageTextsInputObjectSchema } from "./StoryUncheckedUpdateWithoutPageTextsInput.schema"
import { StoryUpdateWithoutPageTextsInputObjectSchema } from "./StoryUpdateWithoutPageTextsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUpsertWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => StoryUpdateWithoutPageTextsInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutPageTextsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpsertWithoutPageTextsInputObjectSchema = Schema
