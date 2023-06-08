/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageScalarWhereInputObjectSchema } from "./PageScalarWhereInput.schema"
import { PageUncheckedUpdateManyWithoutPagesInputObjectSchema } from "./PageUncheckedUpdateManyWithoutPagesInput.schema"
import { PageUpdateManyMutationInputObjectSchema } from "./PageUpdateManyMutationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageUpdateManyWithWhereWithoutStoryInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PageUpdateManyMutationInputObjectSchema),
      z.lazy(() => PageUncheckedUpdateManyWithoutPagesInputObjectSchema),
    ]),
  })
  .strict()

export const PageUpdateManyWithWhereWithoutStoryInputObjectSchema = Schema
