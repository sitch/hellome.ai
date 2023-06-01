/* eslint-disable */

import { useContext } from "react"

import type { Prisma, PageArtwork } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutatePageArtwork() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/pageArtwork/find`,
    `${endpoint}/pageArtwork/aggregate`,
    `${endpoint}/pageArtwork/count`,
    `${endpoint}/pageArtwork/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createPageArtwork<T extends Prisma.PageArtworkCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageArtworkCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, PageArtwork, Prisma.PageArtworkGetPayload<T>>
      >(`${endpoint}/pageArtwork/create`, args, mutate)
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

  async function createManyPageArtwork<
    T extends Prisma.PageArtworkCreateManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.PageArtworkCreateManyArgs>) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/pageArtwork/createMany`,
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

  async function updatePageArtwork<T extends Prisma.PageArtworkUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageArtworkUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.PageArtworkGetPayload<T>>(
        `${endpoint}/pageArtwork/update`,
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

  async function updateManyPageArtwork<
    T extends Prisma.PageArtworkUpdateManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.PageArtworkUpdateManyArgs>) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/pageArtwork/updateMany`,
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

  async function upsertPageArtwork<T extends Prisma.PageArtworkUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageArtworkUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.PageArtworkGetPayload<T>>(
        `${endpoint}/pageArtwork/upsert`,
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

  async function deletePageArtwork<T extends Prisma.PageArtworkDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageArtworkDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.PageArtworkGetPayload<T>>(
        `${endpoint}/pageArtwork/delete`,
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

  async function deleteManyPageArtwork<
    T extends Prisma.PageArtworkDeleteManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.PageArtworkDeleteManyArgs>) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/pageArtwork/deleteMany`,
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
    createPageArtwork,
    createManyPageArtwork,
    updatePageArtwork,
    updateManyPageArtwork,
    upsertPageArtwork,
    deletePageArtwork,
    deleteManyPageArtwork,
  }
}

export function useFindManyPageArtwork<
  T extends Prisma.PageArtworkFindManyArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.PageArtworkFindManyArgs>,
  options?: RequestOptions<Array<Prisma.PageArtworkGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.PageArtworkGetPayload<T>>>(
    `${endpoint}/pageArtwork/findMany`,
    args,
    options,
  )
}

export function useFindUniquePageArtwork<
  T extends Prisma.PageArtworkFindUniqueArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.PageArtworkFindUniqueArgs>,
  options?: RequestOptions<Prisma.PageArtworkGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PageArtworkGetPayload<T>>(
    `${endpoint}/pageArtwork/findMany`,
    args,
    options,
  )
}

export function useFindFirstPageArtwork<
  T extends Prisma.PageArtworkFindFirstArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.PageArtworkFindFirstArgs>,
  options?: RequestOptions<Prisma.PageArtworkGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PageArtworkGetPayload<T>>(
    `${endpoint}/pageArtwork/findMany`,
    args,
    options,
  )
}

export function useAggregatePageArtwork<
  T extends Prisma.PageArtworkAggregateArgs,
>(
  args?: Prisma.Subset<T, Prisma.PageArtworkAggregateArgs>,
  options?: RequestOptions<Prisma.GetPageArtworkAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetPageArtworkAggregateType<T>>(
    `${endpoint}/pageArtwork/findMany`,
    args,
    options,
  )
}

export function useGroupByPageArtwork<
  T extends Prisma.PageArtworkGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.PageArtworkGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.PageArtworkGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<
    T,
    Prisma.PageArtworkGroupByArgs,
    OrderByArg
  > &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PageArtworkGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PageArtworkGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.PageArtworkGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<
                  T[P],
                  Prisma.PageArtworkGroupByOutputType[P]
                >
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PageArtworkGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PageArtworkGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.PageArtworkGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<
                  T[P],
                  Prisma.PageArtworkGroupByOutputType[P]
                >
          }
        >
      : InputErrors
  >(`${endpoint}/pageArtwork/findMany`, args, options)
}

export function useCountPageArtwork<T extends Prisma.PageArtworkCountArgs>(
  args?: Prisma.Subset<T, Prisma.PageArtworkCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.PageArtworkCountAggregateOutputType
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
            Prisma.PageArtworkCountAggregateOutputType
          >
      : number
  >(`${endpoint}/pageArtwork/findMany`, args, options)
}
