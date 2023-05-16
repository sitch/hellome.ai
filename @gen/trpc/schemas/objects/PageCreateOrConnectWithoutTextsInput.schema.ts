import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageCreateWithoutTextsInputObjectSchema } from "./PageCreateWithoutTextsInput.schema"
import { PageUncheckedCreateWithoutTextsInputObjectSchema } from "./PageUncheckedCreateWithoutTextsInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./PageWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageCreateOrConnectWithoutTextsInput> = z
  .object({
    where: z.lazy(() => PageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageCreateWithoutTextsInputObjectSchema),
      z.lazy(() => PageUncheckedCreateWithoutTextsInputObjectSchema),
    ]),
  })
  .strict()

export const PageCreateOrConnectWithoutTextsInputObjectSchema = Schema
