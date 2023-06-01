/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageCreateWithoutStoryInputObjectSchema } from "./PageCreateWithoutStoryInput.schema"
import { PageUncheckedCreateWithoutStoryInputObjectSchema } from "./PageUncheckedCreateWithoutStoryInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./PageWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageCreateOrConnectWithoutStoryInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageCreateWithoutStoryInputObjectSchema),
      z.lazy(() => PageUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageCreateOrConnectWithoutStoryInputObjectSchema = Schema
