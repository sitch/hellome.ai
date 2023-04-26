import { createNextApiHandler } from "@trpc/server/adapters/next"

import { createContext } from "@/server/context"
import { appRouter } from "@/server/routers/_app"

// export API handler
// @see https://trpc.io/docs/api-handler
// @see https://nextjs.org/docs/api-routes/introduction
export default createNextApiHandler({
  router: appRouter,
  createContext,
})
