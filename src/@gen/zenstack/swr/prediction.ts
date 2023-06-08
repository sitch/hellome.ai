/* eslint-disable */
import { useContext } from "react"

import type { Prediction, Prisma } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutatePrediction() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/prediction/find`,
    `${endpoint}/prediction/aggregate`,
    `${endpoint}/prediction/count`,
    `${endpoint}/prediction/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createPrediction<T extends Prisma.PredictionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PredictionCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, Prediction, Prisma.PredictionGetPayload<T>>
      >(`${endpoint}/prediction/create`, args, mutate)
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

  async function createManyPrediction<
    T extends Prisma.PredictionCreateManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.PredictionCreateManyArgs>) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/prediction/createMany`,
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

  async function updatePrediction<T extends Prisma.PredictionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PredictionUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.PredictionGetPayload<T>>(
        `${endpoint}/prediction/update`,
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

  async function updateManyPrediction<
    T extends Prisma.PredictionUpdateManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.PredictionUpdateManyArgs>) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/prediction/updateMany`,
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

  async function upsertPrediction<T extends Prisma.PredictionUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.PredictionUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.PredictionGetPayload<T>>(
        `${endpoint}/prediction/upsert`,
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

  async function deletePrediction<T extends Prisma.PredictionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PredictionDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.PredictionGetPayload<T>>(
        `${endpoint}/prediction/delete`,
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

  async function deleteManyPrediction<
    T extends Prisma.PredictionDeleteManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.PredictionDeleteManyArgs>) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/prediction/deleteMany`,
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
    createPrediction,
    createManyPrediction,
    updatePrediction,
    updateManyPrediction,
    upsertPrediction,
    deletePrediction,
    deleteManyPrediction,
  }
}

export function useFindManyPrediction<T extends Prisma.PredictionFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PredictionFindManyArgs>,
  options?: RequestOptions<Array<Prisma.PredictionGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.PredictionGetPayload<T>>>(
    `${endpoint}/prediction/findMany`,
    args,
    options,
  )
}

export function useFindUniquePrediction<
  T extends Prisma.PredictionFindUniqueArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.PredictionFindUniqueArgs>,
  options?: RequestOptions<Prisma.PredictionGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PredictionGetPayload<T>>(
    `${endpoint}/prediction/findMany`,
    args,
    options,
  )
}

export function useFindFirstPrediction<
  T extends Prisma.PredictionFindFirstArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.PredictionFindFirstArgs>,
  options?: RequestOptions<Prisma.PredictionGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PredictionGetPayload<T>>(
    `${endpoint}/prediction/findMany`,
    args,
    options,
  )
}

export function useAggregatePrediction<
  T extends Prisma.PredictionAggregateArgs,
>(
  args?: Prisma.Subset<T, Prisma.PredictionAggregateArgs>,
  options?: RequestOptions<Prisma.GetPredictionAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetPredictionAggregateType<T>>(
    `${endpoint}/prediction/findMany`,
    args,
    options,
  )
}

export function useGroupByPrediction<
  T extends Prisma.PredictionGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.PredictionGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.PredictionGroupByArgs["orderBy"] },
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
    Prisma.PredictionGroupByArgs,
    OrderByArg
  > &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PredictionGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PredictionGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.PredictionGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<
                  T[P],
                  Prisma.PredictionGroupByOutputType[P]
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
          Prisma.PickArray<Prisma.PredictionGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PredictionGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.PredictionGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<
                  T[P],
                  Prisma.PredictionGroupByOutputType[P]
                >
          }
        >
      : InputErrors
  >(`${endpoint}/prediction/findMany`, args, options)
}

export function useCountPrediction<T extends Prisma.PredictionCountArgs>(
  args?: Prisma.Subset<T, Prisma.PredictionCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.PredictionCountAggregateOutputType
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
            Prisma.PredictionCountAggregateOutputType
          >
      : number
  >(`${endpoint}/prediction/findMany`, args, options)
}
