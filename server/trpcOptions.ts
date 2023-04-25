import { ZodError } from 'zod'
import superjson from 'superjson'
import { Context } from '@/server/context'
import { initTRPC } from '@trpc/server'

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never

export const builder = initTRPC.context<Context>()
export type TRPCCreateOptions = ArgumentTypes<(typeof builder)['create']>[0]

export const transformer = superjson

const trpcOptions: TRPCCreateOptions = {
  // transformer,
  errorFormatter({ shape, error }) {
    console.error({ shape, error })

    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      },
    }
  },
}

export default trpcOptions
