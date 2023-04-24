import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PredictionArgs> = z.object({}).strict()

export const PredictionArgsObjectSchema = Schema
