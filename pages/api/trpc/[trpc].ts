import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from '@/server/routers/_app'
import { createContext } from '@/server/context'

// export API handler
// @see https://trpc.io/docs/api-handler
// @see https://nextjs.org/docs/api-routes/introduction
export default createNextApiHandler({
  router: appRouter,
  createContext,
})
