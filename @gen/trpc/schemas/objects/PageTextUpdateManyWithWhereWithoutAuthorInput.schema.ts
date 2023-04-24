import { z } from 'zod'
import { PageTextScalarWhereInputObjectSchema } from './PageTextScalarWhereInput.schema'
import { PageTextUpdateManyMutationInputObjectSchema } from './PageTextUpdateManyMutationInput.schema'
import { PageTextUncheckedUpdateManyWithoutPageTextsInputObjectSchema } from './PageTextUncheckedUpdateManyWithoutPageTextsInput.schema'

import type { Prisma } from '@prisma/client'

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
