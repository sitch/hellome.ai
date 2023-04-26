import { PageTextScalarWhereInputObjectSchema } from './PageTextScalarWhereInput.schema'
import { PageTextUncheckedUpdateManyWithoutPageTextsInputObjectSchema } from './PageTextUncheckedUpdateManyWithoutPageTextsInput.schema'
import { PageTextUpdateManyMutationInputObjectSchema } from './PageTextUpdateManyMutationInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextUpdateManyWithWhereWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => PageTextScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PageTextUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => PageTextUncheckedUpdateManyWithoutPageTextsInputObjectSchema
        ),
      ]),
    })
    .strict()

export const PageTextUpdateManyWithWhereWithoutAuthorInputObjectSchema = Schema
