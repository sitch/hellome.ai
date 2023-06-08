/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextScalarWhereInputObjectSchema } from "./PageTextScalarWhereInput.schema"
import { PageTextUncheckedUpdateManyWithoutPageTextsInputObjectSchema } from "./PageTextUncheckedUpdateManyWithoutPageTextsInput.schema"
import { PageTextUpdateManyMutationInputObjectSchema } from "./PageTextUpdateManyMutationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextUpdateManyWithWhereWithoutStoryInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageTextScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PageTextUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => PageTextUncheckedUpdateManyWithoutPageTextsInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const PageTextUpdateManyWithWhereWithoutStoryInputObjectSchema = Schema
