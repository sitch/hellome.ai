import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateWithoutStoryInputObjectSchema } from "./PageTextCreateWithoutStoryInput.schema"
import { PageTextUncheckedCreateWithoutStoryInputObjectSchema } from "./PageTextUncheckedCreateWithoutStoryInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageTextCreateOrConnectWithoutStoryInput> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageTextCreateWithoutStoryInputObjectSchema),
      z.lazy(() => PageTextUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextCreateOrConnectWithoutStoryInputObjectSchema = Schema
