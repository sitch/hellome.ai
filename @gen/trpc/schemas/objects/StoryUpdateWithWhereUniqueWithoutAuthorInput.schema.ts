import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryUncheckedUpdateWithoutAuthorInputObjectSchema } from "./StoryUncheckedUpdateWithoutAuthorInput.schema"
import { StoryUpdateWithoutAuthorInputObjectSchema } from "./StoryUpdateWithoutAuthorInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.StoryUpdateWithWhereUniqueWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => StoryUpdateWithoutAuthorInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpdateWithWhereUniqueWithoutAuthorInputObjectSchema = Schema
