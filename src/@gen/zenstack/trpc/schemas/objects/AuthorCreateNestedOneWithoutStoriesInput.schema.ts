/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorCreateOrConnectWithoutStoriesInputObjectSchema } from "./AuthorCreateOrConnectWithoutStoriesInput.schema"
import { AuthorCreateWithoutStoriesInputObjectSchema } from "./AuthorCreateWithoutStoriesInput.schema"
import { AuthorUncheckedCreateWithoutStoriesInputObjectSchema } from "./AuthorUncheckedCreateWithoutStoriesInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./AuthorWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorCreateNestedOneWithoutStoriesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthorCreateWithoutStoriesInputObjectSchema),
        z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AuthorCreateOrConnectWithoutStoriesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AuthorCreateNestedOneWithoutStoriesInputObjectSchema = Schema
