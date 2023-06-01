/* eslint-disable */

import { useContext } from "react"

import type { Prisma, Concept } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutateConcept() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/concept/find`,
    `${endpoint}/concept/aggregate`,
    `${endpoint}/concept/count`,
    `${endpoint}/concept/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createConcept<T extends Prisma.ConceptCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConceptCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, Concept, Prisma.ConceptGetPayload<T>>
      >(`${endpoint}/concept/create`, args, mutate)
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

  async function createManyConcept<T extends Prisma.ConceptCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConceptCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/concept/createMany`,
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

  async function updateConcept<T extends Prisma.ConceptUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConceptUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.ConceptGetPayload<T>>(
        `${endpoint}/concept/update`,
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

  async function updateManyConcept<T extends Prisma.ConceptUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConceptUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/concept/updateMany`,
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

  async function upsertConcept<T extends Prisma.ConceptUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConceptUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.ConceptGetPayload<T>>(
        `${endpoint}/concept/upsert`,
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

  async function deleteConcept<T extends Prisma.ConceptDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConceptDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.ConceptGetPayload<T>>(
        `${endpoint}/concept/delete`,
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

  async function deleteManyConcept<T extends Prisma.ConceptDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConceptDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/concept/deleteMany`,
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
    createConcept,
    createManyConcept,
    updateConcept,
    updateManyConcept,
    upsertConcept,
    deleteConcept,
    deleteManyConcept,
  }
}

export function useFindManyConcept<T extends Prisma.ConceptFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ConceptFindManyArgs>,
  options?: RequestOptions<Array<Prisma.ConceptGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.ConceptGetPayload<T>>>(
    `${endpoint}/concept/findMany`,
    args,
    options,
  )
}

export function useFindUniqueConcept<T extends Prisma.ConceptFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ConceptFindUniqueArgs>,
  options?: RequestOptions<Prisma.ConceptGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.ConceptGetPayload<T>>(
    `${endpoint}/concept/findMany`,
    args,
    options,
  )
}

export function useFindFirstConcept<T extends Prisma.ConceptFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ConceptFindFirstArgs>,
  options?: RequestOptions<Prisma.ConceptGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.ConceptGetPayload<T>>(
    `${endpoint}/concept/findMany`,
    args,
    options,
  )
}

export function useAggregateConcept<T extends Prisma.ConceptAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.ConceptAggregateArgs>,
  options?: RequestOptions<Prisma.GetConceptAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetConceptAggregateType<T>>(
    `${endpoint}/concept/findMany`,
    args,
    options,
  )
}

export function useGroupByConcept<
  T extends Prisma.ConceptGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.ConceptGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.ConceptGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.ConceptGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.ConceptGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.ConceptGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.ConceptGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.ConceptGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.ConceptGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.ConceptGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.ConceptGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.ConceptGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/concept/findMany`, args, options)
}

export function useCountConcept<T extends Prisma.ConceptCountArgs>(
  args?: Prisma.Subset<T, Prisma.ConceptCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.ConceptCountAggregateOutputType
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
            Prisma.ConceptCountAggregateOutputType
          >
      : number
  >(`${endpoint}/concept/findMany`, args, options)
}
