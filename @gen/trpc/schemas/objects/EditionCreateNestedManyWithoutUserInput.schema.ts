import { z } from 'zod'
import { EditionCreateWithoutUserInputObjectSchema } from './EditionCreateWithoutUserInput.schema'
import { EditionUncheckedCreateWithoutUserInputObjectSchema } from './EditionUncheckedCreateWithoutUserInput.schema'
import { EditionCreateOrConnectWithoutUserInputObjectSchema } from './EditionCreateOrConnectWithoutUserInput.schema'
import { EditionCreateManyUserInputEnvelopeObjectSchema } from './EditionCreateManyUserInputEnvelope.schema'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EditionCreateWithoutUserInputObjectSchema),
        z.lazy(() => EditionCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => EditionUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => EditionUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EditionCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => EditionCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => EditionCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => EditionWhereUniqueInputObjectSchema),
        z.lazy(() => EditionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const EditionCreateNestedManyWithoutUserInputObjectSchema = Schema
