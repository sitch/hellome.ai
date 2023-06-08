/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateWithoutStoryInputObjectSchema } from "./PageArtworkCreateWithoutStoryInput.schema"
import { PageArtworkUncheckedCreateWithoutStoryInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutStoryInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkCreateOrConnectWithoutStoryInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageArtworkCreateWithoutStoryInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkCreateOrConnectWithoutStoryInputObjectSchema = Schema
