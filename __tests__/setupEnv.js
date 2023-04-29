// The below can be used in a Jest global setup file or similar for your testing set-up
import { loadEnvConfig } from '@next/env'
import { TextEncoder, TextDecoder } from 'util'

Object.assign(global, { TextDecoder, TextEncoder })

export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
