/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateWithoutPageTextsInputObjectSchema } from "./StoryCreateWithoutPageTextsInput.schema"
import { StoryUncheckedCreateWithoutPageTextsInputObjectSchema } from "./StoryUncheckedCreateWithoutPageTextsInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCreateOrConnectWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const StoryCreateOrConnectWithoutPageTextsInputObjectSchema = Schema
