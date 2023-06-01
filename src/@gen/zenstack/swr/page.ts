/* eslint-disable */

import { useContext } from "react"

import type { Prisma, Page } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutatePage() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/page/find`,
    `${endpoint}/page/aggregate`,
    `${endpoint}/page/count`,
    `${endpoint}/page/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createPage<T extends Prisma.PageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, Page, Prisma.PageGetPayload<T>>
      >(`${endpoint}/page/create`, args, mutate)
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

  async function createManyPage<T extends Prisma.PageCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/page/createMany`,
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

  async function updatePage<T extends Prisma.PageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.PageGetPayload<T>>(
        `${endpoint}/page/update`,
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

  async function updateManyPage<T extends Prisma.PageUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/page/updateMany`,
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

  async function upsertPage<T extends Prisma.PageUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.PageGetPayload<T>>(
        `${endpoint}/page/upsert`,
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

  async function deletePage<T extends Prisma.PageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.PageGetPayload<T>>(
        `${endpoint}/page/delete`,
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

  async function deleteManyPage<T extends Prisma.PageDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/page/deleteMany`,
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
    createPage,
    createManyPage,
    updatePage,
    updateManyPage,
    upsertPage,
    deletePage,
    deleteManyPage,
  }
}

export function useFindManyPage<T extends Prisma.PageFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PageFindManyArgs>,
  options?: RequestOptions<Array<Prisma.PageGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.PageGetPayload<T>>>(
    `${endpoint}/page/findMany`,
    args,
    options,
  )
}

export function useFindUniquePage<T extends Prisma.PageFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PageFindUniqueArgs>,
  options?: RequestOptions<Prisma.PageGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PageGetPayload<T>>(
    `${endpoint}/page/findMany`,
    args,
    options,
  )
}

export function useFindFirstPage<T extends Prisma.PageFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PageFindFirstArgs>,
  options?: RequestOptions<Prisma.PageGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PageGetPayload<T>>(
    `${endpoint}/page/findMany`,
    args,
    options,
  )
}

export function useAggregatePage<T extends Prisma.PageAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.PageAggregateArgs>,
  options?: RequestOptions<Prisma.GetPageAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetPageAggregateType<T>>(
    `${endpoint}/page/findMany`,
    args,
    options,
  )
}

export function useGroupByPage<
  T extends Prisma.PageGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.PageGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.PageGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.PageGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PageGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PageGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.PageGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.PageGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PageGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PageGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.PageGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.PageGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/page/findMany`, args, options)
}

export function useCountPage<T extends Prisma.PageCountArgs>(
  args?: Prisma.Subset<T, Prisma.PageCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<T["select"], Prisma.PageCountAggregateOutputType>
      : number
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<T["select"], Prisma.PageCountAggregateOutputType>
      : number
  >(`${endpoint}/page/findMany`, args, options)
}
