import { PageTextUncheckedUpdateWithoutAuthorInputObjectSchema } from './PageTextUncheckedUpdateWithoutAuthorInput.schema'
import { PageTextUpdateWithoutAuthorInputObjectSchema } from './PageTextUpdateWithoutAuthorInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
