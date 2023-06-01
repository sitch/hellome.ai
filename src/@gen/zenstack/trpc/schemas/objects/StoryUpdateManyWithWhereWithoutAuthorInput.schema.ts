/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryScalarWhereInputObjectSchema } from "./StoryScalarWhereInput.schema"
import { StoryUncheckedUpdateManyWithoutStoriesInputObjectSchema } from "./StoryUncheckedUpdateManyWithoutStoriesInput.schema"
import { StoryUpdateManyMutationInputObjectSchema } from "./StoryUpdateManyMutationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUpdateManyWithWhereWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => StoryScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => StoryUpdateManyMutationInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateManyWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpdateManyWithWhereWithoutAuthorInputObjectSchema = Schema
