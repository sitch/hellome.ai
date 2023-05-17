import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateWithoutStoryInputObjectSchema } from "./PageTextCreateWithoutStoryInput.schema"
import { PageTextUncheckedCreateWithoutStoryInputObjectSchema } from "./PageTextUncheckedCreateWithoutStoryInput.schema"
import { PageTextUncheckedUpdateWithoutStoryInputObjectSchema } from "./PageTextUncheckedUpdateWithoutStoryInput.schema"
import { PageTextUpdateWithoutStoryInputObjectSchema } from "./PageTextUpdateWithoutStoryInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageTextUpsertWithWhereUniqueWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PageTextUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutStoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PageTextCreateWithoutStoryInputObjectSchema),
        z.lazy(() => PageTextUncheckedCreateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpsertWithWhereUniqueWithoutStoryInputObjectSchema = Schema
