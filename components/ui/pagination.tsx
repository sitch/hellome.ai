import { Pagination, type IPaginationProps } from "react-headless-pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export type PaginatorProps = Omit<
  IPaginationProps,
  "className" | "edgePageCount" | "middlePagesSiblingCount"
> &
  Partial<Pick<IPaginationProps, "edgePageCount" | "middlePagesSiblingCount">>

/**
 * @link https://github.com/thijssmudde/react-headless-pagination
 */
export default function Paginator({
  currentPage = 0,
  totalPages = 10,
  ...props
}: PaginatorProps) {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      edgePageCount={2}
      middlePagesSiblingCount={1}
      {...props}
      className="flex h-10 w-full select-none items-center text-sm"
      truncableText="..."
      truncableClassName="w-10 px-0.5 text-center"
    >
      <Pagination.PrevButton
        as={<button />}
        className={cn(
          "mr-2 flex items-center text-gray-500 hover:text-gray-600 dark:hover:text-gray-200",
          {
            "cursor-pointer": currentPage !== 0,
            "opacity-50": currentPage === 0,
          },
        )}
      >
        <ChevronLeft size={20} className="mr-3" />
        Previous
      </Pagination.PrevButton>

      <nav className="flex grow justify-center">
        <ul className="flex items-center">
          <Pagination.PageButton
            activeClassName="bg-primary-50 dark:bg-opacity-0 text-primary-600 dark:text-white"
            inactiveClassName="text-gray-500"
            className={
              "hover:text-primary-600 focus:text-primary-600 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full focus:font-bold focus:outline-none"
            }
          />
        </ul>
      </nav>

      <Pagination.NextButton
        className={cn(
          "mr-2 flex items-center text-gray-500 hover:text-gray-600 dark:hover:text-gray-200",
          {
            "cursor-pointer": currentPage !== totalPages - 1,
            "opacity-50": currentPage === totalPages - 1,
          },
        )}
      >
        Next
        <ChevronRight size={20} className="ml-3" />
      </Pagination.NextButton>
    </Pagination>
  )
}
