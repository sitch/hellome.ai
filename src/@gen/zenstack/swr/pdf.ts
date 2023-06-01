/* eslint-disable */

import { useContext } from "react"

import type { Prisma, PDF } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutatePDF() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/pDF/find`,
    `${endpoint}/pDF/aggregate`,
    `${endpoint}/pDF/count`,
    `${endpoint}/pDF/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createPDF<T extends Prisma.PDFCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PDFCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, PDF, Prisma.PDFGetPayload<T>>
      >(`${endpoint}/pDF/create`, args, mutate)
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

  async function createManyPDF<T extends Prisma.PDFCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PDFCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/pDF/createMany`,
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

  async function updatePDF<T extends Prisma.PDFUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PDFUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.PDFGetPayload<T>>(
        `${endpoint}/pDF/update`,
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

  async function updateManyPDF<T extends Prisma.PDFUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PDFUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/pDF/updateMany`,
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

  async function upsertPDF<T extends Prisma.PDFUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.PDFUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.PDFGetPayload<T>>(
        `${endpoint}/pDF/upsert`,
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

  async function deletePDF<T extends Prisma.PDFDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PDFDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.PDFGetPayload<T>>(
        `${endpoint}/pDF/delete`,
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

  async function deleteManyPDF<T extends Prisma.PDFDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PDFDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/pDF/deleteMany`,
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
    createPDF,
    createManyPDF,
    updatePDF,
    updateManyPDF,
    upsertPDF,
    deletePDF,
    deleteManyPDF,
  }
}

export function useFindManyPDF<T extends Prisma.PDFFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PDFFindManyArgs>,
  options?: RequestOptions<Array<Prisma.PDFGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.PDFGetPayload<T>>>(
    `${endpoint}/pDF/findMany`,
    args,
    options,
  )
}

export function useFindUniquePDF<T extends Prisma.PDFFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PDFFindUniqueArgs>,
  options?: RequestOptions<Prisma.PDFGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PDFGetPayload<T>>(
    `${endpoint}/pDF/findMany`,
    args,
    options,
  )
}

export function useFindFirstPDF<T extends Prisma.PDFFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PDFFindFirstArgs>,
  options?: RequestOptions<Prisma.PDFGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PDFGetPayload<T>>(
    `${endpoint}/pDF/findMany`,
    args,
    options,
  )
}

export function useAggregatePDF<T extends Prisma.PDFAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.PDFAggregateArgs>,
  options?: RequestOptions<Prisma.GetPDFAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetPDFAggregateType<T>>(
    `${endpoint}/pDF/findMany`,
    args,
    options,
  )
}

export function useGroupByPDF<
  T extends Prisma.PDFGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.PDFGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.PDFGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.PDFGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PDFGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PDFGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.PDFGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.PDFGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PDFGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PDFGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.PDFGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.PDFGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/pDF/findMany`, args, options)
}

export function useCountPDF<T extends Prisma.PDFCountArgs>(
  args?: Prisma.Subset<T, Prisma.PDFCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<T["select"], Prisma.PDFCountAggregateOutputType>
      : number
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<T["select"], Prisma.PDFCountAggregateOutputType>
      : number
  >(`${endpoint}/pDF/findMany`, args, options)
}
