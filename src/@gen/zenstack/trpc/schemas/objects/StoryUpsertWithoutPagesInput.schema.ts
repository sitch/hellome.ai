/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateWithoutPagesInputObjectSchema } from "./StoryCreateWithoutPagesInput.schema"
import { StoryUncheckedCreateWithoutPagesInputObjectSchema } from "./StoryUncheckedCreateWithoutPagesInput.schema"
import { StoryUncheckedUpdateWithoutPagesInputObjectSchema } from "./StoryUncheckedUpdateWithoutPagesInput.schema"
import { StoryUpdateWithoutPagesInputObjectSchema } from "./StoryUpdateWithoutPagesInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUpsertWithoutPagesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => StoryUpdateWithoutPagesInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutPagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPagesInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPagesInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpsertWithoutPagesInputObjectSchema = Schema
