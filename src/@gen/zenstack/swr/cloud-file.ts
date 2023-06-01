/* eslint-disable */

import { useContext } from "react"

import type { Prisma, CloudFile } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutateCloudFile() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/cloudFile/find`,
    `${endpoint}/cloudFile/aggregate`,
    `${endpoint}/cloudFile/count`,
    `${endpoint}/cloudFile/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createCloudFile<T extends Prisma.CloudFileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CloudFileCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, CloudFile, Prisma.CloudFileGetPayload<T>>
      >(`${endpoint}/cloudFile/create`, args, mutate)
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

  async function createManyCloudFile<T extends Prisma.CloudFileCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CloudFileCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/cloudFile/createMany`,
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

  async function updateCloudFile<T extends Prisma.CloudFileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CloudFileUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.CloudFileGetPayload<T>>(
        `${endpoint}/cloudFile/update`,
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

  async function updateManyCloudFile<T extends Prisma.CloudFileUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CloudFileUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/cloudFile/updateMany`,
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

  async function upsertCloudFile<T extends Prisma.CloudFileUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.CloudFileUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.CloudFileGetPayload<T>>(
        `${endpoint}/cloudFile/upsert`,
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

  async function deleteCloudFile<T extends Prisma.CloudFileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CloudFileDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.CloudFileGetPayload<T>>(
        `${endpoint}/cloudFile/delete`,
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

  async function deleteManyCloudFile<T extends Prisma.CloudFileDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CloudFileDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/cloudFile/deleteMany`,
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
    createCloudFile,
    createManyCloudFile,
    updateCloudFile,
    updateManyCloudFile,
    upsertCloudFile,
    deleteCloudFile,
    deleteManyCloudFile,
  }
}

export function useFindManyCloudFile<T extends Prisma.CloudFileFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.CloudFileFindManyArgs>,
  options?: RequestOptions<Array<Prisma.CloudFileGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.CloudFileGetPayload<T>>>(
    `${endpoint}/cloudFile/findMany`,
    args,
    options,
  )
}

export function useFindUniqueCloudFile<
  T extends Prisma.CloudFileFindUniqueArgs,
>(
  args?: Prisma.SelectSubset<T, Prisma.CloudFileFindUniqueArgs>,
  options?: RequestOptions<Prisma.CloudFileGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.CloudFileGetPayload<T>>(
    `${endpoint}/cloudFile/findMany`,
    args,
    options,
  )
}

export function useFindFirstCloudFile<T extends Prisma.CloudFileFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.CloudFileFindFirstArgs>,
  options?: RequestOptions<Prisma.CloudFileGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.CloudFileGetPayload<T>>(
    `${endpoint}/cloudFile/findMany`,
    args,
    options,
  )
}

export function useAggregateCloudFile<T extends Prisma.CloudFileAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.CloudFileAggregateArgs>,
  options?: RequestOptions<Prisma.GetCloudFileAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetCloudFileAggregateType<T>>(
    `${endpoint}/cloudFile/findMany`,
    args,
    options,
  )
}

export function useGroupByCloudFile<
  T extends Prisma.CloudFileGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.CloudFileGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.CloudFileGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.CloudFileGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.CloudFileGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.CloudFileGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.CloudFileGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<T[P], Prisma.CloudFileGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.CloudFileGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.CloudFileGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<
                    T[P],
                    Prisma.CloudFileGroupByOutputType[P]
                  >
              : Prisma.GetScalarType<T[P], Prisma.CloudFileGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/cloudFile/findMany`, args, options)
}

export function useCountCloudFile<T extends Prisma.CloudFileCountArgs>(
  args?: Prisma.Subset<T, Prisma.CloudFileCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.CloudFileCountAggregateOutputType
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
            Prisma.CloudFileCountAggregateOutputType
          >
      : number
  >(`${endpoint}/cloudFile/findMany`, args, options)
}
