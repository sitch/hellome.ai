import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextCreateWithoutPageInputObjectSchema } from './PageTextCreateWithoutPageInput.schema'
import { PageTextUncheckedCreateWithoutPageInputObjectSchema } from './PageTextUncheckedCreateWithoutPageInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextCreateOrConnectWithoutPageInput> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageTextCreateWithoutPageInputObjectSchema),
      z.lazy(() => PageTextUncheckedCreateWithoutPageInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextCreateOrConnectWithoutPageInputObjectSchema = Schema
