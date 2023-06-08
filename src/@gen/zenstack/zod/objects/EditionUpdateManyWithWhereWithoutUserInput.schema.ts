/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionScalarWhereInputObjectSchema } from "./EditionScalarWhereInput.schema"
import { EditionUncheckedUpdateManyWithoutEditionsInputObjectSchema } from "./EditionUncheckedUpdateManyWithoutEditionsInput.schema"
import { EditionUpdateManyMutationInputObjectSchema } from "./EditionUpdateManyMutationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionUpdateManyWithWhereWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => EditionScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => EditionUpdateManyMutationInputObjectSchema),
      z.lazy(() => EditionUncheckedUpdateManyWithoutEditionsInputObjectSchema),
    ]),
  })
  .strict()

export const EditionUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
