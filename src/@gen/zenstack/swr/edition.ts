/* eslint-disable */
import { useContext } from "react"

import type { Edition, Prisma } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutateEdition() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/edition/find`,
    `${endpoint}/edition/aggregate`,
    `${endpoint}/edition/count`,
    `${endpoint}/edition/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createEdition<T extends Prisma.EditionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditionCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, Edition, Prisma.EditionGetPayload<T>>
      >(`${endpoint}/edition/create`, args, mutate)
    } catch (err: any) {
      if (
        err.info?.prisma &&
        err.info?.code === "P2004" &&
        err.info?.reason === "RESULT_NOT_READABLE"
      ) {
        // unable to readback data
        return undefined
      } else {
        throw err
      }
    }
  }

  async function createManyEdition<T extends Prisma.EditionCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditionCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/edition/createMany`,
        args,
        mutate,
      )
    } catch (err: any) {
      if (
        err.info?.prisma &&
        err.info?.code === "P2004" &&
        err.info?.reason === "RESULT_NOT_READABLE"
      ) {
        // unable to readback data
        return undefined
      } else {
        throw err
      }
    }
  }

  async function updateEdition<T extends Prisma.EditionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditionUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.EditionGetPayload<T>>(
        `${endpoint}/edition/update`,
        args,
        mutate,
      )
    } catch (err: any) {
      if (
        err.info?.prisma &&
        err.info?.code === "P2004" &&
        err.info?.reason === "RESULT_NOT_READABLE"
      ) {
        // unable to readback data
        return undefined
      } else {
        throw err
      }
    }
  }

  async function updateManyEdition<T extends Prisma.EditionUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditionUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/edition/updateMany`,
        args,
        mutate,
      )
    } catch (err: any) {
      if (
        err.info?.prisma &&
        err.info?.code === "P2004" &&
        err.info?.reason === "RESULT_NOT_READABLE"
      ) {
        // unable to readback data
        return undefined
      } else {
        throw err
      }
    }
  }

  async function upsertEdition<T extends Prisma.EditionUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditionUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.EditionGetPayload<T>>(
        `${endpoint}/edition/upsert`,
        args,
        mutate,
      )
    } catch (err: any) {
      if (
        err.info?.prisma &&
        err.info?.code === "P2004" &&
        err.info?.reason === "RESULT_NOT_READABLE"
      ) {
        // unable to readback data
        return undefined
      } else {
        throw err
      }
    }
  }

  async function deleteEdition<T extends Prisma.EditionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditionDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.EditionGetPayload<T>>(
        `${endpoint}/edition/delete`,
        args,
        mutate,
      )
    } catch (err: any) {
      if (
        err.info?.prisma &&
        err.info?.code === "P2004" &&
        err.info?.reason === "RESULT_NOT_READABLE"
      ) {
        // unable to readback data
        return undefined
      } else {
        throw err
      }
    }
  }

  async function deleteManyEdition<T extends Prisma.EditionDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditionDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/edition/deleteMany`,
        args,
        mutate,
      )
    } catch (err: any) {
      if (
        err.info?.prisma &&
        err.info?.code === "P2004" &&
        err.info?.reason === "RESULT_NOT_READABLE"
      ) {
        // unable to readback data
        return undefined
      } else {
        throw err
      }
    }
  }
  return {
    createEdition,
    createManyEdition,
    updateEdition,
    updateManyEdition,
    upsertEdition,
    deleteEdition,
    deleteManyEdition,
  }
}

export function useFindManyEdition<T extends Prisma.EditionFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.EditionFindManyArgs>,
  options?: RequestOptions<Array<Prisma.EditionGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.EditionGetPayload<T>>>(
    `${endpoint}/edition/findMany`,
    args,
    options,
  )
}

export function useFindUniqueEdition<T extends Prisma.EditionFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.EditionFindUniqueArgs>,
  options?: RequestOptions<Prisma.EditionGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.EditionGetPayload<T>>(
    `${endpoint}/edition/findMany`,
    args,
    options,
  )
}

export function useFindFirstEdition<T extends Prisma.EditionFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.EditionFindFirstArgs>,
  options?: RequestOptions<Prisma.EditionGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.EditionGetPayload<T>>(
    `${endpoint}/edition/findMany`,
    args,
    options,
  )
}

export function useAggregateEdition<T extends Prisma.EditionAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.EditionAggregateArgs>,
  options?: RequestOptions<Prisma.GetEditionAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetEditionAggregateType<T>>(
    `${endpoint}/edition/findMany`,
    args,
    options,
  )
}

export function useGroupByEdition<
  T extends Prisma.EditionGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.EditionGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.EditionGroupByArgs["orderBy"] },
  OrderFields extends Prisma.ExcludeUnderscoreKeys<
    Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
  >,
  ByFields extends Prisma.TupleToUnion<T["by"]>,
  ByValid extends Prisma.Has<ByFields, OrderFields>,
  HavingFields extends Prisma.GetHavingFields<T["having"]>,
  HavingValid extends Prisma.Has<ByFields, HavingFields>,
  ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
  InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [Error, "Field ", P, ` in "having" needs to be provided in "by"`]
      }[HavingFields]
    : "take" extends Prisma.Keys<T>
    ? "orderBy" extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : "skip" extends Prisma.Keys<T>
    ? "orderBy" extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields],
>(
  args?: Prisma.SubsetIntersection<T, Prisma.EditionGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.EditionGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.EditionGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.EditionGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.EditionGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.EditionGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.EditionGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.EditionGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.EditionGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/edition/findMany`, args, options)
}

export function useCountEdition<T extends Prisma.EditionCountArgs>(
  args?: Prisma.Subset<T, Prisma.EditionCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.EditionCountAggregateOutputType
          >
      : number
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.EditionCountAggregateOutputType
          >
      : number
  >(`${endpoint}/edition/findMany`, args, options)
}
