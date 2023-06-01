/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageCreateWithoutStoryInputObjectSchema } from "./PageCreateWithoutStoryInput.schema"
import { PageUncheckedCreateWithoutStoryInputObjectSchema } from "./PageUncheckedCreateWithoutStoryInput.schema"
import { PageUncheckedUpdateWithoutStoryInputObjectSchema } from "./PageUncheckedUpdateWithoutStoryInput.schema"
import { PageUpdateWithoutStoryInputObjectSchema } from "./PageUpdateWithoutStoryInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./PageWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageUpsertWithWhereUniqueWithoutStoryInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PageUpdateWithoutStoryInputObjectSchema),
      z.lazy(() => PageUncheckedUpdateWithoutStoryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PageCreateWithoutStoryInputObjectSchema),
      z.lazy(() => PageUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageUpsertWithWhereUniqueWithoutStoryInputObjectSchema = Schema
