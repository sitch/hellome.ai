import { StoryCreateManyAuthorInputEnvelopeObjectSchema } from './StoryCreateManyAuthorInputEnvelope.schema'
import { StoryCreateOrConnectWithoutAuthorInputObjectSchema } from './StoryCreateOrConnectWithoutAuthorInput.schema'
import { StoryCreateWithoutAuthorInputObjectSchema } from './StoryCreateWithoutAuthorInput.schema'
import { StoryUncheckedCreateWithoutAuthorInputObjectSchema } from './StoryUncheckedCreateWithoutAuthorInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryCreateNestedManyWithoutAuthorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => StoryCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => StoryCreateWithoutAuthorInputObjectSchema).array(),
        z.lazy(() => StoryUncheckedCreateWithoutAuthorInputObjectSchema),
        z
          .lazy(() => StoryUncheckedCreateWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => StoryCreateOrConnectWithoutAuthorInputObjectSchema),
        z
          .lazy(() => StoryCreateOrConnectWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => StoryCreateManyAuthorInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => StoryWhereUniqueInputObjectSchema),
        z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const StoryCreateNestedManyWithoutAuthorInputObjectSchema = Schema
