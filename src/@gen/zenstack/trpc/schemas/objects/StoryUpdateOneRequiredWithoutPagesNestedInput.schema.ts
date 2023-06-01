/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateOrConnectWithoutPagesInputObjectSchema } from "./StoryCreateOrConnectWithoutPagesInput.schema"
import { StoryCreateWithoutPagesInputObjectSchema } from "./StoryCreateWithoutPagesInput.schema"
import { StoryUncheckedCreateWithoutPagesInputObjectSchema } from "./StoryUncheckedCreateWithoutPagesInput.schema"
import { StoryUncheckedUpdateWithoutPagesInputObjectSchema } from "./StoryUncheckedUpdateWithoutPagesInput.schema"
import { StoryUpdateWithoutPagesInputObjectSchema } from "./StoryUpdateWithoutPagesInput.schema"
import { StoryUpsertWithoutPagesInputObjectSchema } from "./StoryUpsertWithoutPagesInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUpdateOneRequiredWithoutPagesNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => StoryCreateWithoutPagesInputObjectSchema),
        z.lazy(() => StoryUncheckedCreateWithoutPagesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => StoryCreateOrConnectWithoutPagesInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => StoryUpsertWithoutPagesInputObjectSchema).optional(),
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => StoryUpdateWithoutPagesInputObjectSchema),
        z.lazy(() => StoryUncheckedUpdateWithoutPagesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const StoryUpdateOneRequiredWithoutPagesNestedInputObjectSchema = Schema
