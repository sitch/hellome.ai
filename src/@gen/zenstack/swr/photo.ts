/* eslint-disable */
import { useContext } from "react"

import type { Photo, Prisma } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutatePhoto() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/photo/find`,
    `${endpoint}/photo/aggregate`,
    `${endpoint}/photo/count`,
    `${endpoint}/photo/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createPhoto<T extends Prisma.PhotoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, Photo, Prisma.PhotoGetPayload<T>>
      >(`${endpoint}/photo/create`, args, mutate)
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

  async function createManyPhoto<T extends Prisma.PhotoCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/photo/createMany`,
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

  async function updatePhoto<T extends Prisma.PhotoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.PhotoGetPayload<T>>(
        `${endpoint}/photo/update`,
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

  async function updateManyPhoto<T extends Prisma.PhotoUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/photo/updateMany`,
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

  async function upsertPhoto<T extends Prisma.PhotoUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.PhotoGetPayload<T>>(
        `${endpoint}/photo/upsert`,
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

  async function deletePhoto<T extends Prisma.PhotoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.PhotoGetPayload<T>>(
        `${endpoint}/photo/delete`,
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

  async function deleteManyPhoto<T extends Prisma.PhotoDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/photo/deleteMany`,
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
    createPhoto,
    createManyPhoto,
    updatePhoto,
    updateManyPhoto,
    upsertPhoto,
    deletePhoto,
    deleteManyPhoto,
  }
}

export function useFindManyPhoto<T extends Prisma.PhotoFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PhotoFindManyArgs>,
  options?: RequestOptions<Array<Prisma.PhotoGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.PhotoGetPayload<T>>>(
    `${endpoint}/photo/findMany`,
    args,
    options,
  )
}

export function useFindUniquePhoto<T extends Prisma.PhotoFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PhotoFindUniqueArgs>,
  options?: RequestOptions<Prisma.PhotoGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PhotoGetPayload<T>>(
    `${endpoint}/photo/findMany`,
    args,
    options,
  )
}

export function useFindFirstPhoto<T extends Prisma.PhotoFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.PhotoFindFirstArgs>,
  options?: RequestOptions<Prisma.PhotoGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.PhotoGetPayload<T>>(
    `${endpoint}/photo/findMany`,
    args,
    options,
  )
}

export function useAggregatePhoto<T extends Prisma.PhotoAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.PhotoAggregateArgs>,
  options?: RequestOptions<Prisma.GetPhotoAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetPhotoAggregateType<T>>(
    `${endpoint}/photo/findMany`,
    args,
    options,
  )
}

export function useGroupByPhoto<
  T extends Prisma.PhotoGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.PhotoGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.PhotoGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.PhotoGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PhotoGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PhotoGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.PhotoGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.PhotoGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.PhotoGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.PhotoGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.PhotoGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.PhotoGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/photo/findMany`, args, options)
}

export function useCountPhoto<T extends Prisma.PhotoCountArgs>(
  args?: Prisma.Subset<T, Prisma.PhotoCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.PhotoCountAggregateOutputType
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
            Prisma.PhotoCountAggregateOutputType
          >
      : number
  >(`${endpoint}/photo/findMany`, args, options)
}
