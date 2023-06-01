/* eslint-disable */
import { z } from "zod"

export const PageStatusSchema = z.enum(["DRAFT", "PUBLISHED"])
