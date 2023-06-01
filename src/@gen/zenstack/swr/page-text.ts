/* eslint-disable */

import { useContext } from "react"

import type { Prisma, PageText } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutatePageText() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/pageText/find`,
    `${endpoint}/pageText/aggregate`,
    `${endpoint}/pageText/count`,
    `${endpoint}/pageText/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createPageText<T extends Prisma.PageTextCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageTextCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, PageText, Prisma.PageTextGetPayload<T>>
      >(`${endpoint}/pageText/create`, args, mutate)
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

  async function createManyPageText<T extends Prisma.PageTextCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageTextCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/pageText/createMany`,
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

  async function updatePageText<T extends Prisma.PageTextUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageTextUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.PageTextGetPayload<T>>(
        `${endpoint}/pageText/update`,
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

  async function updateManyPageText<T extends Prisma.PageTextUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageTextUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/pageText/updateMany`,
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

  async function upsertPageText<T extends Prisma.PageTextUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageTextUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.PageTextGetPayload<T>>(
        `${endpoint}/pageText/upsert`,
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

  async function deletePageText<T extends Prisma.PageTextDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageTextDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.PageTextGetPayload<T>>(
        `${endpoint}/pageText/delete`,
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

  async function deleteManyPageText<T extends Prisma.PageTextDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageTextDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/pageText/deleteMany`,
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
    createPageText,
    createManyPageText,
    updatePageText,
    updateManyPageText,
    upsertPageText,
    deletePageText,
    deleteManyPageText,
  }
}

export function useFindManyPageText<T extends Prisma.PageTextFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PageTextFindManyArgs>,
  options?: RequestOptions<Array<Prisma.PageTextGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.PageTextGetPayload<T>>>(
    `${endpoint}/pageText/findMany`,
    args,
    options,
  )
}

export function useFindUniquePageText<T extends Prisma.PageTextFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PageTextFindUniqueArgs>,
  options?: RequestOptions<Prisma.PageTextGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PageTextGetPayload<T>>(
    `${endpoint}/pageText/findMany`,
    args,
    options,
  )
}

export function useFindFirstPageText<T extends Prisma.PageTextFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PageTextFindFirstArgs>,
  options?: RequestOptions<Prisma.PageTextGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PageTextGetPayload<T>>(
    `${endpoint}/pageText/findMany`,
    args,
    options,
  )
}

export function useAggregatePageText<T extends Prisma.PageTextAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.PageTextAggregateArgs>,
  options?: RequestOptions<Prisma.GetPageTextAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetPageTextAggregateType<T>>(
    `${endpoint}/pageText/findMany`,
    args,
    options,
  )
}

export function useGroupByPageText<
  T extends Prisma.PageTextGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.PageTextGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.PageTextGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.PageTextGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PageTextGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PageTextGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.PageTextGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<T[P], Prisma.PageTextGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PageTextGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PageTextGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.PageTextGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<T[P], Prisma.PageTextGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/pageText/findMany`, args, options)
}

export function useCountPageText<T extends Prisma.PageTextCountArgs>(
  args?: Prisma.Subset<T, Prisma.PageTextCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.PageTextCountAggregateOutputType
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
            Prisma.PageTextCountAggregateOutputType
          >
      : number
  >(`${endpoint}/pageText/findMany`, args, options)
}
