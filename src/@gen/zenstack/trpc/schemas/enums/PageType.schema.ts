/* eslint-disable */
import { z } from "zod"

export const PageTypeSchema = z.enum(["FrontCover", "Body", "BackCover"])
