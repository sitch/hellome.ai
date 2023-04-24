import { z } from 'zod'
import { EditionScalarWhereInputObjectSchema } from './EditionScalarWhereInput.schema'
import { EditionUpdateManyMutationInputObjectSchema } from './EditionUpdateManyMutationInput.schema'
import { EditionUncheckedUpdateManyWithoutEditionInputObjectSchema } from './EditionUncheckedUpdateManyWithoutEditionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => EditionScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => EditionUpdateManyMutationInputObjectSchema),
      z.lazy(() => EditionUncheckedUpdateManyWithoutEditionInputObjectSchema),
    ]),
  })
  .strict()

export const EditionUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
