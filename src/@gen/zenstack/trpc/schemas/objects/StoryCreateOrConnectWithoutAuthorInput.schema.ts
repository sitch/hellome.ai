/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateWithoutAuthorInputObjectSchema } from "./StoryCreateWithoutAuthorInput.schema"
import { StoryUncheckedCreateWithoutAuthorInputObjectSchema } from "./StoryUncheckedCreateWithoutAuthorInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCreateOrConnectWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const StoryCreateOrConnectWithoutAuthorInputObjectSchema = Schema
