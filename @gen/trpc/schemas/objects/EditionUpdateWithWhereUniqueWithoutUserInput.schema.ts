import { z } from 'zod'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'
import { EditionUpdateWithoutUserInputObjectSchema } from './EditionUpdateWithoutUserInput.schema'
import { EditionUncheckedUpdateWithoutUserInputObjectSchema } from './EditionUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => EditionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => EditionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => EditionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const EditionUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
