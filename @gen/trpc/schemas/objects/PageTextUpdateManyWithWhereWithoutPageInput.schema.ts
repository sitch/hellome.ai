import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextScalarWhereInputObjectSchema } from "./PageTextScalarWhereInput.schema"
import { PageTextUncheckedUpdateManyWithoutTextsInputObjectSchema } from "./PageTextUncheckedUpdateManyWithoutTextsInput.schema"
import { PageTextUpdateManyMutationInputObjectSchema } from "./PageTextUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.PageTextUpdateManyWithWhereWithoutPageInput> = z
  .object({
    where: z.lazy(() => PageTextScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PageTextUpdateManyMutationInputObjectSchema),
      z.lazy(() => PageTextUncheckedUpdateManyWithoutTextsInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextUpdateManyWithWhereWithoutPageInputObjectSchema = Schema
