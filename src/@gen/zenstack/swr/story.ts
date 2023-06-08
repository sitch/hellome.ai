/* eslint-disable */
import { useContext } from "react"

import type { Prisma, Story } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutateStory() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/story/find`,
    `${endpoint}/story/aggregate`,
    `${endpoint}/story/count`,
    `${endpoint}/story/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createStory<T extends Prisma.StoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, Story, Prisma.StoryGetPayload<T>>
      >(`${endpoint}/story/create`, args, mutate)
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

  async function createManyStory<T extends Prisma.StoryCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/story/createMany`,
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

  async function updateStory<T extends Prisma.StoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.StoryGetPayload<T>>(
        `${endpoint}/story/update`,
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

  async function updateManyStory<T extends Prisma.StoryUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/story/updateMany`,
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

  async function upsertStory<T extends Prisma.StoryUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.StoryGetPayload<T>>(
        `${endpoint}/story/upsert`,
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

  async function deleteStory<T extends Prisma.StoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.StoryGetPayload<T>>(
        `${endpoint}/story/delete`,
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

  async function deleteManyStory<T extends Prisma.StoryDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/story/deleteMany`,
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
    createStory,
    createManyStory,
    updateStory,
    updateManyStory,
    upsertStory,
    deleteStory,
    deleteManyStory,
  }
}

export function useFindManyStory<T extends Prisma.StoryFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.StoryFindManyArgs>,
  options?: RequestOptions<Array<Prisma.StoryGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.StoryGetPayload<T>>>(
    `${endpoint}/story/findMany`,
    args,
    options,
  )
}

export function useFindUniqueStory<T extends Prisma.StoryFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.StoryFindUniqueArgs>,
  options?: RequestOptions<Prisma.StoryGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.StoryGetPayload<T>>(
    `${endpoint}/story/findMany`,
    args,
    options,
  )
}

export function useFindFirstStory<T extends Prisma.StoryFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.StoryFindFirstArgs>,
  options?: RequestOptions<Prisma.StoryGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.StoryGetPayload<T>>(
    `${endpoint}/story/findMany`,
    args,
    options,
  )
}

export function useAggregateStory<T extends Prisma.StoryAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.StoryAggregateArgs>,
  options?: RequestOptions<Prisma.GetStoryAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetStoryAggregateType<T>>(
    `${endpoint}/story/findMany`,
    args,
    options,
  )
}

export function useGroupByStory<
  T extends Prisma.StoryGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.StoryGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.StoryGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.StoryGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.StoryGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.StoryGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.StoryGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.StoryGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.StoryGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.StoryGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.StoryGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.StoryGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/story/findMany`, args, options)
}

export function useCountStory<T extends Prisma.StoryCountArgs>(
  args?: Prisma.Subset<T, Prisma.StoryCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.StoryCountAggregateOutputType
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
            Prisma.StoryCountAggregateOutputType
          >
      : number
  >(`${endpoint}/story/findMany`, args, options)
}
