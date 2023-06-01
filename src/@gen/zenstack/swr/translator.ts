/* eslint-disable */

import { useContext } from "react"

import type { Prisma, Translator } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutateTranslator() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/translator/find`,
    `${endpoint}/translator/aggregate`,
    `${endpoint}/translator/count`,
    `${endpoint}/translator/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createTranslator<T extends Prisma.TranslatorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TranslatorCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, Translator, Prisma.TranslatorGetPayload<T>>
      >(`${endpoint}/translator/create`, args, mutate)
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

  async function createManyTranslator<
    T extends Prisma.TranslatorCreateManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.TranslatorCreateManyArgs>) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/translator/createMany`,
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

  async function updateTranslator<T extends Prisma.TranslatorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TranslatorUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.TranslatorGetPayload<T>>(
        `${endpoint}/translator/update`,
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

  async function updateManyTranslator<
    T extends Prisma.TranslatorUpdateManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.TranslatorUpdateManyArgs>) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/translator/updateMany`,
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

  async function upsertTranslator<T extends Prisma.TranslatorUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.TranslatorUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.TranslatorGetPayload<T>>(
        `${endpoint}/translator/upsert`,
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

  async function deleteTranslator<T extends Prisma.TranslatorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TranslatorDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.TranslatorGetPayload<T>>(
        `${endpoint}/translator/delete`,
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

  async function deleteManyTranslator<
    T extends Prisma.TranslatorDeleteManyArgs,
  >(args: Prisma.SelectSubset<T, Prisma.TranslatorDeleteManyArgs>) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/translator/deleteMany`,
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
    createTranslator,
    createManyTranslator,
    updateTranslator,
    updateManyTranslator,
    upsertTranslator,
    deleteTranslator,
    deleteManyTranslator,
  }
}

export function useFindManyTranslator<T extends Prisma.TranslatorFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.TranslatorFindManyArgs>,
  options?: RequestOptions<Array<Prisma.TranslatorGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.TranslatorGetPayload<T>>>(
    `${endpoint}/translator/findMany`,
    args,
    options,
  )
}

export function useFindUniqueTranslator<
  T extends Prisma.TranslatorFindUniqueArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.TranslatorFindUniqueArgs>,
  options?: RequestOptions<Prisma.TranslatorGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.TranslatorGetPayload<T>>(
    `${endpoint}/translator/findMany`,
    args,
    options,
  )
}

export function useFindFirstTranslator<
  T extends Prisma.TranslatorFindFirstArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.TranslatorFindFirstArgs>,
  options?: RequestOptions<Prisma.TranslatorGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.TranslatorGetPayload<T>>(
    `${endpoint}/translator/findMany`,
    args,
    options,
  )
}

export function useAggregateTranslator<
  T extends Prisma.TranslatorAggregateArgs,
>(
  args?: Prisma.Subset<T, Prisma.TranslatorAggregateArgs>,
  options?: RequestOptions<Prisma.GetTranslatorAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetTranslatorAggregateType<T>>(
    `${endpoint}/translator/findMany`,
    args,
    options,
  )
}

export function useGroupByTranslator<
  T extends Prisma.TranslatorGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.TranslatorGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.TranslatorGroupByArgs["orderBy"] },
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
    Prisma.TranslatorGroupByArgs,
    OrderByArg
  > &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.TranslatorGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.TranslatorGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.TranslatorGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<
                  T[P],
                  Prisma.TranslatorGroupByOutputType[P]
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
          Prisma.PickArray<Prisma.TranslatorGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.TranslatorGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.TranslatorGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<
                  T[P],
                  Prisma.TranslatorGroupByOutputType[P]
                >
          }
        >
      : InputErrors
  >(`${endpoint}/translator/findMany`, args, options)
}

export function useCountTranslator<T extends Prisma.TranslatorCountArgs>(
  args?: Prisma.Subset<T, Prisma.TranslatorCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.TranslatorCountAggregateOutputType
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
            Prisma.TranslatorCountAggregateOutputType
          >
      : number
  >(`${endpoint}/translator/findMany`, args, options)
}
