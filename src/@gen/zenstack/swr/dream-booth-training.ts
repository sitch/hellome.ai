/* eslint-disable */

import { useContext } from "react"

import type { Prisma, DreamBoothTraining } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutateDreamBoothTraining() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/dreamBoothTraining/find`,
    `${endpoint}/dreamBoothTraining/aggregate`,
    `${endpoint}/dreamBoothTraining/count`,
    `${endpoint}/dreamBoothTraining/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createDreamBoothTraining<
    T extends Prisma.DreamBoothTrainingCreateArgs,
  >(args: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingCreateArgs>) {
    try {
      return await request.post<
        Prisma.CheckSelect<
          T,
          DreamBoothTraining,
          Prisma.DreamBoothTrainingGetPayload<T>
        >
      >(`${endpoint}/dreamBoothTraining/create`, args, mutate)
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

  async function createManyDreamBoothTraining<
    T extends Prisma.DreamBoothTrainingCreateManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingCreateManyArgs>) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/dreamBoothTraining/createMany`,
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

  async function updateDreamBoothTraining<
    T extends Prisma.DreamBoothTrainingUpdateArgs,
  >(args: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingUpdateArgs>) {
    try {
      return await request.put<Prisma.DreamBoothTrainingGetPayload<T>>(
        `${endpoint}/dreamBoothTraining/update`,
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

  async function updateManyDreamBoothTraining<
    T extends Prisma.DreamBoothTrainingUpdateManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingUpdateManyArgs>) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/dreamBoothTraining/updateMany`,
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

  async function upsertDreamBoothTraining<
    T extends Prisma.DreamBoothTrainingUpsertArgs,
  >(args: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingUpsertArgs>) {
    try {
      return await request.post<Prisma.DreamBoothTrainingGetPayload<T>>(
        `${endpoint}/dreamBoothTraining/upsert`,
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

  async function deleteDreamBoothTraining<
    T extends Prisma.DreamBoothTrainingDeleteArgs,
  >(args: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingDeleteArgs>) {
    try {
      return await request.del<Prisma.DreamBoothTrainingGetPayload<T>>(
        `${endpoint}/dreamBoothTraining/delete`,
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

  async function deleteManyDreamBoothTraining<
    T extends Prisma.DreamBoothTrainingDeleteManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingDeleteManyArgs>) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/dreamBoothTraining/deleteMany`,
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
    createDreamBoothTraining,
    createManyDreamBoothTraining,
    updateDreamBoothTraining,
    updateManyDreamBoothTraining,
    upsertDreamBoothTraining,
    deleteDreamBoothTraining,
    deleteManyDreamBoothTraining,
  }
}

export function useFindManyDreamBoothTraining<
  T extends Prisma.DreamBoothTrainingFindManyArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingFindManyArgs>,
  options?: RequestOptions<Array<Prisma.DreamBoothTrainingGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.DreamBoothTrainingGetPayload<T>>>(
    `${endpoint}/dreamBoothTraining/findMany`,
    args,
    options,
  )
}

export function useFindUniqueDreamBoothTraining<
  T extends Prisma.DreamBoothTrainingFindUniqueArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingFindUniqueArgs>,
  options?: RequestOptions<Prisma.DreamBoothTrainingGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.DreamBoothTrainingGetPayload<T>>(
    `${endpoint}/dreamBoothTraining/findMany`,
    args,
    options,
  )
}

export function useFindFirstDreamBoothTraining<
  T extends Prisma.DreamBoothTrainingFindFirstArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.DreamBoothTrainingFindFirstArgs>,
  options?: RequestOptions<Prisma.DreamBoothTrainingGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.DreamBoothTrainingGetPayload<T>>(
    `${endpoint}/dreamBoothTraining/findMany`,
    args,
    options,
  )
}

export function useAggregateDreamBoothTraining<
  T extends Prisma.DreamBoothTrainingAggregateArgs,
>(
  args?: Prisma.Subset<T, Prisma.DreamBoothTrainingAggregateArgs>,
  options?: RequestOptions<Prisma.GetDreamBoothTrainingAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetDreamBoothTrainingAggregateType<T>>(
    `${endpoint}/dreamBoothTraining/findMany`,
    args,
    options,
  )
}

export function useGroupByDreamBoothTraining<
  T extends Prisma.DreamBoothTrainingGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.DreamBoothTrainingGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.DreamBoothTrainingGroupByArgs["orderBy"] },
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
    Prisma.DreamBoothTrainingGroupByArgs,
    OrderByArg
  > &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<
            Prisma.DreamBoothTrainingGroupByOutputType,
            T["by"]
          > & {
            [P in keyof T &
              keyof Prisma.DreamBoothTrainingGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.DreamBoothTrainingGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<
                  T[P],
                  Prisma.DreamBoothTrainingGroupByOutputType[P]
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
          Prisma.PickArray<
            Prisma.DreamBoothTrainingGroupByOutputType,
            T["by"]
          > & {
            [P in keyof T &
              keyof Prisma.DreamBoothTrainingGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.DreamBoothTrainingGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<
                  T[P],
                  Prisma.DreamBoothTrainingGroupByOutputType[P]
                >
          }
        >
      : InputErrors
  >(`${endpoint}/dreamBoothTraining/findMany`, args, options)
}

export function useCountDreamBoothTraining<
  T extends Prisma.DreamBoothTrainingCountArgs,
>(
  args?: Prisma.Subset<T, Prisma.DreamBoothTrainingCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.DreamBoothTrainingCountAggregateOutputType
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
            Prisma.DreamBoothTrainingCountAggregateOutputType
          >
      : number
  >(`${endpoint}/dreamBoothTraining/findMany`, args, options)
}
