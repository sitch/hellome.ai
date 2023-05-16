import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreateWithoutConceptsInputObjectSchema } from "./PhotoCreateWithoutConceptsInput.schema"
import { PhotoUncheckedCreateWithoutConceptsInputObjectSchema } from "./PhotoUncheckedCreateWithoutConceptsInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PhotoCreateOrConnectWithoutConceptsInput> = z
  .object({
    where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutConceptsInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoCreateOrConnectWithoutConceptsInputObjectSchema = Schema
