import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextCreateWithoutAuthorInputObjectSchema } from './PageTextCreateWithoutAuthorInput.schema'
import { PageTextUncheckedCreateWithoutAuthorInputObjectSchema } from './PageTextUncheckedCreateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageTextCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextCreateOrConnectWithoutAuthorInputObjectSchema = Schema
