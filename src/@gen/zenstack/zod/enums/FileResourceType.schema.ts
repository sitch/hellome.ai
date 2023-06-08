/* eslint-disable */
import { z } from "zod"

export const FileResourceTypeSchema = z.enum([
  "ckpt",
  "image",
  "model",
  "pdf",
  "safetensor",
  "video",
])
