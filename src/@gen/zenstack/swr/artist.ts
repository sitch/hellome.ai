/* eslint-disable */
import { useContext } from "react"

import type { Artist, Prisma } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutateArtist() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/artist/find`,
    `${endpoint}/artist/aggregate`,
    `${endpoint}/artist/count`,
    `${endpoint}/artist/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createArtist<T extends Prisma.ArtistCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArtistCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, Artist, Prisma.ArtistGetPayload<T>>
      >(`${endpoint}/artist/create`, args, mutate)
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

  async function createManyArtist<T extends Prisma.ArtistCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArtistCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/artist/createMany`,
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

  async function updateArtist<T extends Prisma.ArtistUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArtistUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.ArtistGetPayload<T>>(
        `${endpoint}/artist/update`,
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

  async function updateManyArtist<T extends Prisma.ArtistUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArtistUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/artist/updateMany`,
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

  async function upsertArtist<T extends Prisma.ArtistUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArtistUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.ArtistGetPayload<T>>(
        `${endpoint}/artist/upsert`,
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

  async function deleteArtist<T extends Prisma.ArtistDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArtistDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.ArtistGetPayload<T>>(
        `${endpoint}/artist/delete`,
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

  async function deleteManyArtist<T extends Prisma.ArtistDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArtistDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/artist/deleteMany`,
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
    createArtist,
    createManyArtist,
    updateArtist,
    updateManyArtist,
    upsertArtist,
    deleteArtist,
    deleteManyArtist,
  }
}

export function useFindManyArtist<T extends Prisma.ArtistFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ArtistFindManyArgs>,
  options?: RequestOptions<Array<Prisma.ArtistGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.ArtistGetPayload<T>>>(
    `${endpoint}/artist/findMany`,
    args,
    options,
  )
}

export function useFindUniqueArtist<T extends Prisma.ArtistFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ArtistFindUniqueArgs>,
  options?: RequestOptions<Prisma.ArtistGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.ArtistGetPayload<T>>(
    `${endpoint}/artist/findMany`,
    args,
    options,
  )
}

export function useFindFirstArtist<T extends Prisma.ArtistFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.ArtistFindFirstArgs>,
  options?: RequestOptions<Prisma.ArtistGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.ArtistGetPayload<T>>(
    `${endpoint}/artist/findMany`,
    args,
    options,
  )
}

export function useAggregateArtist<T extends Prisma.ArtistAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.ArtistAggregateArgs>,
  options?: RequestOptions<Prisma.GetArtistAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetArtistAggregateType<T>>(
    `${endpoint}/artist/findMany`,
    args,
    options,
  )
}

export function useGroupByArtist<
  T extends Prisma.ArtistGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.ArtistGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.ArtistGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.ArtistGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.ArtistGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.ArtistGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.ArtistGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.ArtistGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.ArtistGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.ArtistGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.ArtistGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.ArtistGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/artist/findMany`, args, options)
}

export function useCountArtist<T extends Prisma.ArtistCountArgs>(
  args?: Prisma.Subset<T, Prisma.ArtistCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.ArtistCountAggregateOutputType
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
            Prisma.ArtistCountAggregateOutputType
          >
      : number
  >(`${endpoint}/artist/findMany`, args, options)
}
