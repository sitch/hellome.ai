import { EditionUncheckedUpdateWithoutUserInputObjectSchema } from './EditionUncheckedUpdateWithoutUserInput.schema'
import { EditionUpdateWithoutUserInputObjectSchema } from './EditionUpdateWithoutUserInput.schema'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
