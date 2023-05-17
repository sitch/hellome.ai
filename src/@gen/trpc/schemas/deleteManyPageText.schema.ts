import { z } from "zod"

import { PageTextWhereInputObjectSchema } from "./objects/PageTextWhereInput.schema"

export const PageTextDeleteManySchema = z.object({
  where: PageTextWhereInputObjectSchema.optional(),
})
