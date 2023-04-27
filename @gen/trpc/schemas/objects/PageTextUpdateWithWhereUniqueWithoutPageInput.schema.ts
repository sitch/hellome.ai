import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedUpdateWithoutPageInputObjectSchema } from "./PageTextUncheckedUpdateWithoutPageInput.schema"
import { PageTextUpdateWithoutPageInputObjectSchema } from "./PageTextUpdateWithoutPageInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutPageInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageTextUpdateWithoutPageInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutPageInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpdateWithWhereUniqueWithoutPageInputObjectSchema = Schema
