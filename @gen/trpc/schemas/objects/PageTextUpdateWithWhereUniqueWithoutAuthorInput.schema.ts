import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextUpdateWithoutAuthorInputObjectSchema } from './PageTextUpdateWithoutAuthorInput.schema'
import { PageTextUncheckedUpdateWithoutAuthorInputObjectSchema } from './PageTextUncheckedUpdateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageTextUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpdateWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema
