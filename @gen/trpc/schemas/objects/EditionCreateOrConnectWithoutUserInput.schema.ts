import { z } from 'zod'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'
import { EditionCreateWithoutUserInputObjectSchema } from './EditionCreateWithoutUserInput.schema'
import { EditionUncheckedCreateWithoutUserInputObjectSchema } from './EditionUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => EditionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EditionCreateWithoutUserInputObjectSchema),
      z.lazy(() => EditionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const EditionCreateOrConnectWithoutUserInputObjectSchema = Schema
