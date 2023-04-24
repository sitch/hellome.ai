import { z } from 'zod'
import { CloudFileWhereUniqueInputObjectSchema } from './CloudFileWhereUniqueInput.schema'
import { CloudFileCreateWithoutPhotoInputObjectSchema } from './CloudFileCreateWithoutPhotoInput.schema'
import { CloudFileUncheckedCreateWithoutPhotoInputObjectSchema } from './CloudFileUncheckedCreateWithoutPhotoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileCreateOrConnectWithoutPhotoInput> = z
  .object({
    where: z.lazy(() => CloudFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CloudFileCreateWithoutPhotoInputObjectSchema),
      z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const CloudFileCreateOrConnectWithoutPhotoInputObjectSchema = Schema
