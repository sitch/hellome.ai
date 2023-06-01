/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionUncheckedUpdateWithoutUserInputObjectSchema } from "./EditionUncheckedUpdateWithoutUserInput.schema"
import { EditionUpdateWithoutUserInputObjectSchema } from "./EditionUpdateWithoutUserInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./EditionWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionUpdateWithWhereUniqueWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => EditionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => EditionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => EditionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const EditionUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
