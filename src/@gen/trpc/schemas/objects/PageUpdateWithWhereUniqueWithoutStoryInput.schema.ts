import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageUncheckedUpdateWithoutStoryInputObjectSchema } from "./PageUncheckedUpdateWithoutStoryInput.schema"
import { PageUpdateWithoutStoryInputObjectSchema } from "./PageUpdateWithoutStoryInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./PageWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutStoryInput> = z
  .object({
    where: z.lazy(() => PageWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PageUpdateWithoutStoryInputObjectSchema),
      z.lazy(() => PageUncheckedUpdateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageUpdateWithWhereUniqueWithoutStoryInputObjectSchema = Schema
