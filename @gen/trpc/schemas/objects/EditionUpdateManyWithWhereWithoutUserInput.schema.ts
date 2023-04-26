import { EditionScalarWhereInputObjectSchema } from './EditionScalarWhereInput.schema'
import { EditionUncheckedUpdateManyWithoutEditionInputObjectSchema } from './EditionUncheckedUpdateManyWithoutEditionInput.schema'
import { EditionUpdateManyMutationInputObjectSchema } from './EditionUpdateManyMutationInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
