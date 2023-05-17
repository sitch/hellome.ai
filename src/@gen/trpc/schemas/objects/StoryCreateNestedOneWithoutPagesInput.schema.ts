import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateOrConnectWithoutPagesInputObjectSchema } from "./StoryCreateOrConnectWithoutPagesInput.schema"
import { StoryCreateWithoutPagesInputObjectSchema } from "./StoryCreateWithoutPagesInput.schema"
import { StoryUncheckedCreateWithoutPagesInputObjectSchema } from "./StoryUncheckedCreateWithoutPagesInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.StoryCreateNestedOneWithoutPagesInput> = z
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
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const StoryCreateNestedOneWithoutPagesInputObjectSchema = Schema
