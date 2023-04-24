import { z } from 'zod'
import { PageTextCreateWithoutStoryInputObjectSchema } from './PageTextCreateWithoutStoryInput.schema'
import { PageTextUncheckedCreateWithoutStoryInputObjectSchema } from './PageTextUncheckedCreateWithoutStoryInput.schema'
import { PageTextCreateOrConnectWithoutStoryInputObjectSchema } from './PageTextCreateOrConnectWithoutStoryInput.schema'
import { PageTextCreateManyStoryInputEnvelopeObjectSchema } from './PageTextCreateManyStoryInputEnvelope.schema'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextUncheckedCreateNestedManyWithoutStoryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageTextCreateWithoutStoryInputObjectSchema),
          z.lazy(() => PageTextCreateWithoutStoryInputObjectSchema).array(),
          z.lazy(() => PageTextUncheckedCreateWithoutStoryInputObjectSchema),
          z
            .lazy(() => PageTextUncheckedCreateWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PageTextCreateOrConnectWithoutStoryInputObjectSchema),
          z
            .lazy(() => PageTextCreateOrConnectWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageTextCreateManyStoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PageTextWhereUniqueInputObjectSchema),
          z.lazy(() => PageTextWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const PageTextUncheckedCreateNestedManyWithoutStoryInputObjectSchema =
  Schema
