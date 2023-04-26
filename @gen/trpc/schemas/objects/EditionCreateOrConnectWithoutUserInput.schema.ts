import { EditionCreateWithoutUserInputObjectSchema } from './EditionCreateWithoutUserInput.schema'
import { EditionUncheckedCreateWithoutUserInputObjectSchema } from './EditionUncheckedCreateWithoutUserInput.schema'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
