/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedUpdateWithoutStoryInputObjectSchema } from "./PageArtworkUncheckedUpdateWithoutStoryInput.schema"
import { PageArtworkUpdateWithoutStoryInputObjectSchema } from "./PageArtworkUpdateWithoutStoryInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkUpdateWithWhereUniqueWithoutStoryInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PageArtworkUpdateWithoutStoryInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedUpdateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkUpdateWithWhereUniqueWithoutStoryInputObjectSchema =
  Schema
