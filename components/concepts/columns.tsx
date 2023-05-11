"use client"

import TimeAgo from "react-timeago"
import { type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ConceptTrainButton } from "@/components/concepts/ConceptTrainButton"

import { ConceptSchema, type Concept } from "@/@gen/zod"

export const schema = ConceptSchema
export type DataType = Concept

export const columns: ColumnDef<DataType>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Type",
    accessorKey: "type",
  },
  {
    header: "Created",
    accessorKey: "createdAt",
    cell: ({ row }) => <TimeAgo date={row.original.createdAt} />,
  },
  {
    header: "Updated",
    accessorKey: "updatedAt",
    cell: ({ row }) => <TimeAgo date={row.original.updatedAt} />,
  },
  {
    // width: 200,

    id: "actions",
    cell: ({ row }) => {
      const concept = row.original

      return (
        <div
        // className="flex space-x-2"
        >
          <ConceptTrainButton concept={row.original} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(concept.id)}
              >
                Copy concept ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View concept details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
