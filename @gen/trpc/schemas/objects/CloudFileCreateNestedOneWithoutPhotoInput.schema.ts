import { z } from 'zod'
import { CloudFileCreateWithoutPhotoInputObjectSchema } from './CloudFileCreateWithoutPhotoInput.schema'
import { CloudFileUncheckedCreateWithoutPhotoInputObjectSchema } from './CloudFileUncheckedCreateWithoutPhotoInput.schema'
import { CloudFileCreateOrConnectWithoutPhotoInputObjectSchema } from './CloudFileCreateOrConnectWithoutPhotoInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './CloudFileWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileCreateNestedOneWithoutPhotoInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CloudFileCreateWithoutPhotoInputObjectSchema),
        z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CloudFileCreateOrConnectWithoutPhotoInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileCreateNestedOneWithoutPhotoInputObjectSchema = Schema
