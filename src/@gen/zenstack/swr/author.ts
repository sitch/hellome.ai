/* eslint-disable */
import { useContext } from "react"

import type { Author, Prisma } from "@prisma/client"

import { RequestHandlerContext, type RequestOptions } from "./_helper"
import * as request from "./_helper"

export function useMutateAuthor() {
  const { endpoint } = useContext(RequestHandlerContext)
  const prefixesToMutate = [
    `${endpoint}/author/find`,
    `${endpoint}/author/aggregate`,
    `${endpoint}/author/count`,
    `${endpoint}/author/groupBy`,
  ]
  const mutate = request.getMutate(prefixesToMutate)

  async function createAuthor<T extends Prisma.AuthorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorCreateArgs>,
  ) {
    try {
      return await request.post<
        Prisma.CheckSelect<T, Author, Prisma.AuthorGetPayload<T>>
      >(`${endpoint}/author/create`, args, mutate)
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

  async function createManyAuthor<T extends Prisma.AuthorCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorCreateManyArgs>,
  ) {
    try {
      return await request.post<Prisma.BatchPayload>(
        `${endpoint}/author/createMany`,
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

  async function updateAuthor<T extends Prisma.AuthorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorUpdateArgs>,
  ) {
    try {
      return await request.put<Prisma.AuthorGetPayload<T>>(
        `${endpoint}/author/update`,
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

  async function updateManyAuthor<T extends Prisma.AuthorUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorUpdateManyArgs>,
  ) {
    try {
      return await request.put<Prisma.BatchPayload>(
        `${endpoint}/author/updateMany`,
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

  async function upsertAuthor<T extends Prisma.AuthorUpsertArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorUpsertArgs>,
  ) {
    try {
      return await request.post<Prisma.AuthorGetPayload<T>>(
        `${endpoint}/author/upsert`,
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

  async function deleteAuthor<T extends Prisma.AuthorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorDeleteArgs>,
  ) {
    try {
      return await request.del<Prisma.AuthorGetPayload<T>>(
        `${endpoint}/author/delete`,
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

  async function deleteManyAuthor<T extends Prisma.AuthorDeleteManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorDeleteManyArgs>,
  ) {
    try {
      return await request.del<Prisma.BatchPayload>(
        `${endpoint}/author/deleteMany`,
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
    createAuthor,
    createManyAuthor,
    updateAuthor,
    updateManyAuthor,
    upsertAuthor,
    deleteAuthor,
    deleteManyAuthor,
  }
}

export function useFindManyAuthor<T extends Prisma.AuthorFindManyArgs>(
  args?: Prisma.SelectSubset<T, Prisma.AuthorFindManyArgs>,
  options?: RequestOptions<Array<Prisma.AuthorGetPayload<T>>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Array<Prisma.AuthorGetPayload<T>>>(
    `${endpoint}/author/findMany`,
    args,
    options,
  )
}

export function useFindUniqueAuthor<T extends Prisma.AuthorFindUniqueArgs>(
  args?: Prisma.SelectSubset<T, Prisma.AuthorFindUniqueArgs>,
  options?: RequestOptions<Prisma.AuthorGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.AuthorGetPayload<T>>(
    `${endpoint}/author/findMany`,
    args,
    options,
  )
}

export function useFindFirstAuthor<T extends Prisma.AuthorFindFirstArgs>(
  args?: Prisma.SelectSubset<T, Prisma.AuthorFindFirstArgs>,
  options?: RequestOptions<Prisma.AuthorGetPayload<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.AuthorGetPayload<T>>(
    `${endpoint}/author/findMany`,
    args,
    options,
  )
}

export function useAggregateAuthor<T extends Prisma.AuthorAggregateArgs>(
  args?: Prisma.Subset<T, Prisma.AuthorAggregateArgs>,
  options?: RequestOptions<Prisma.GetAuthorAggregateType<T>>,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<Prisma.GetAuthorAggregateType<T>>(
    `${endpoint}/author/findMany`,
    args,
    options,
  )
}

export function useGroupByAuthor<
  T extends Prisma.AuthorGroupByArgs,
  HasSelectOrTake extends Prisma.Or<
    Prisma.Extends<"skip", Prisma.Keys<T>>,
    Prisma.Extends<"take", Prisma.Keys<T>>
  >,
  OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.AuthorGroupByArgs["orderBy"] }
    : { orderBy?: Prisma.AuthorGroupByArgs["orderBy"] },
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
  args?: Prisma.SubsetIntersection<T, Prisma.AuthorGroupByArgs, OrderByArg> &
    InputErrors,
  options?: RequestOptions<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.AuthorGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.AuthorGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.AuthorGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.AuthorGroupByOutputType[P]>
          }
        >
      : InputErrors
  >,
) {
  const { endpoint } = useContext(RequestHandlerContext)
  return request.get<
    {} extends InputErrors
      ? Array<
          Prisma.PickArray<Prisma.AuthorGroupByOutputType, T["by"]> & {
            [P in keyof T &
              keyof Prisma.AuthorGroupByOutputType]: P extends "_count"
              ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.AuthorGroupByOutputType[P]>
              : Prisma.GetScalarType<T[P], Prisma.AuthorGroupByOutputType[P]>
          }
        >
      : InputErrors
  >(`${endpoint}/author/findMany`, args, options)
}

export function useCountAuthor<T extends Prisma.AuthorCountArgs>(
  args?: Prisma.Subset<T, Prisma.AuthorCountArgs>,
  options?: RequestOptions<
    T extends { select: any }
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<
            T["select"],
            Prisma.AuthorCountAggregateOutputType
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
            Prisma.AuthorCountAggregateOutputType
          >
      : number
  >(`${endpoint}/author/findMany`, args, options)
}
