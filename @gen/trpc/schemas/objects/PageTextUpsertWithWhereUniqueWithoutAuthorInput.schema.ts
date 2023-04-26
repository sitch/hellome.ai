import { PageTextCreateWithoutAuthorInputObjectSchema } from './PageTextCreateWithoutAuthorInput.schema'
import { PageTextUncheckedCreateWithoutAuthorInputObjectSchema } from './PageTextUncheckedCreateWithoutAuthorInput.schema'
import { PageTextUncheckedUpdateWithoutAuthorInputObjectSchema } from './PageTextUncheckedUpdateWithoutAuthorInput.schema'
import { PageTextUpdateWithoutAuthorInputObjectSchema } from './PageTextUpdateWithoutAuthorInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextUpsertWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PageTextUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PageTextCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpsertWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema
