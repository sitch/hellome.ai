"use client"

// import { useState, type KeyboardEventHandler } from "react"

// import { type GroupBase, type Props } from "react-select"
// import CreatableSelect from "react-select/creatable"
// import { castArray } from "lodash"

// const components = {
//   DropdownIndicator: null,
// }

// type MultiSelectOption = {
//   readonly label: string
//   readonly value: string
// }

// const createOption = (label: string): MultiSelectOption => ({
//   label,
//   value: label,
// })

// export function MultiSelect<
//   Option extends MultiSelectOption,
//   IsMulti extends boolean = false,
//   Group extends GroupBase<Option> = GroupBase<Option>,
// >(props: Props<Option, IsMulti, Group>) {
//   const [inputValue, setInputValue] = useState("")
//   const [value, setValue] = useState<readonly Option[]>([])

//   const handleKeyDown: KeyboardEventHandler = (event) => {
//     if (!inputValue) return
//     switch (event.key) {
//       case "Enter":
//       case "Tab":
//         setValue((prev) => [...prev, createOption(inputValue) as Option])
//         setInputValue("")
//         event.preventDefault()
//     }
//   }

//   return (
//     <div className="container mx-auto mt-20">
//       <CreatableSelect
//         {...props}
//         // theme={(theme) => ({ ...theme, borderRadius: 0 })}
//         // isMulti={true as IsMulti}
//         // isMulti
//         // className="w-full lg:w-1/2"
//         // classNamePrefix="select"
//         components={components}
//         inputValue={inputValue}
//         isClearable
//         menuIsOpen={false}
//         onChange={(newValue) => {
//           // if (newValue) {
//           setValue(castArray(newValue ?? []))
//           // }
//         }}
//         onInputChange={(newValue) => setInputValue(newValue)}
//         onKeyDown={handleKeyDown}
//         placeholder="Type something and press enter..."
//         value={value}
//       />
//     </div>
//   )
// }

// import React, { type KeyboardEventHandler } from "react"

// import CreatableSelect from "react-select/creatable"

// const components = {
//   DropdownIndicator: null,
// }

// type Option = {
//   readonly label: string
//   readonly value: string
// }

// const createOption = (label: string) => ({
//   label,
//   value: label,
// })

// export const MultiSelect = ({ className }) => {
//   const [inputValue, setInputValue] = useState("")
//   const [value, setValue] = useState<readonly Option[]>([])

//   const handleKeyDown: KeyboardEventHandler = (event) => {
//     if (!inputValue) {
//       return
//     }
//     switch (event.key) {
//       case "Enter":
//       case "Tab":
//         setValue((prev) => [...prev, createOption(inputValue)])
//         setInputValue("")
//         event.preventDefault()
//     }
//   }

//   return (
//     <CreatableSelect
//       components={components}
//       inputValue={inputValue}
//       isClearable
//       isMulti
//       menuIsOpen={false}
//       onChange={(newValue) => setValue(newValue)}
//       onInputChange={(newValue) => setInputValue(newValue)}
//       onKeyDown={handleKeyDown}
//       placeholder="Type something and press enter..."
//       value={value}
//       // className={cn(
//       //   "duration-220 transition-all ease-in-out",
//       //   // "px-3 py-2",
//       //   "border-input",
//       //   "ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border  text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//       //   // "bg-transparent",
//       //   "bg-white dark:bg-black",
//       //   className,
//       // )}

//       classNames={{
//         // input: () => "[&_input:focus]:ring-0",
//         control: (state) =>
//       state.isFocused ? 'border-red-600' : 'border-grey-300',
//       }}

//       // className="rounded-lg text-center border-2"

//       // className="w-full lg:w-1/2"
//       // classNamePrefix="select"
//     />
//   )
// }
import { useState, type KeyboardEventHandler, type RefAttributes } from "react"

import {
  components,
  type ClearIndicatorProps,
  type DropdownIndicatorProps,
  type GroupBase,
  type MultiValueRemoveProps,
} from "react-select"
import CreatableSelect from "react-select/creatable"
import type Select from "react-select/dist/declarations/src/Select"
import { type PublicBaseSelectProps } from "react-select/dist/declarations/src/Select"
import { type CreatableAdditionalProps } from "react-select/dist/declarations/src/useCreatable"
import { type StateManagerAdditionalProps } from "react-select/dist/declarations/src/useStateManager"
import { castArray } from "lodash"
import { ChevronDown, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown size={16} />
    </components.DropdownIndicator>
  )
}

const ClearIndicator = (props: ClearIndicatorProps<Option>) => {
  return (
    <components.ClearIndicator {...props}>
      <XCircle size={16} />
    </components.ClearIndicator>
  )
}

const MultiValueRemove = (props: MultiValueRemoveProps<Option>) => {
  return (
    <components.MultiValueRemove {...props}>
      <XCircle size={16} />
    </components.MultiValueRemove>
  )
}

const controlStyles = {
  base: "border rounded-lg bg-white hover:cursor-pointer",
  focus: "border-primary-600 ring-1 ring-primary-500",
  nonFocus: "border-gray-300 hover:border-gray-400",
}
const placeholderStyles = "text-gray-500 pl-1 py-0.5"
const selectInputStyles = "pl-1 py-0.5"
const valueContainerStyles = "p-1 gap-1"
const singleValueStyles = "leading-7 ml-1"
const multiValueStyles =
  "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5"
const multiValueLabelStyles = "leading-6 py-0.5"
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md"
const indicatorsContainerStyles = "p-1 gap-1"
const clearIndicatorStyles =
  "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800"
const indicatorSeparatorStyles = "bg-gray-300"
const dropdownIndicatorStyles =
  "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black"
const menuStyles = "p-1 mt-2 border border-gray-200 bg-white rounded-lg"
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm"
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
}
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm"

type Option = {
  readonly label: string
  readonly value: string
}

const createOption = (label: string) => ({
  label,
  value: label,
})

export type MultiSelectProps = JSX.IntrinsicAttributes &
  Omit<
    PublicBaseSelectProps<Option, boolean, GroupBase<Option>>,
    | "value"
    | "onChange"
    | "inputValue"
    | "menuIsOpen"
    | "onInputChange"
    | "onMenuOpen"
    | "onMenuClose"
  > &
  Partial<PublicBaseSelectProps<Option, boolean, GroupBase<Option>>> &
  StateManagerAdditionalProps<Option> &
  CreatableAdditionalProps<Option, GroupBase<Option>> &
  RefAttributes<Select<Option, boolean, GroupBase<Option>>>

/**
 * @link https://www.jussivirtanen.fi/writing/styling-react-select-with-tailwind
 */
export const MultiSelect = ({ id, ...props }: MultiSelectProps) => {
  const [inputValue, setInputValue] = useState("")
  const [value, setValue] = useState<readonly Option[]>([])

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) {
      return
    }
    if (value.some((option) => option.value === inputValue)) {
      return
    }

    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue)])
        setInputValue("")
        event.preventDefault()
    }
  }

  return (
    <CreatableSelect
      instanceId={id}
      isMulti={true}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      unstyled
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
        }),
        // On mobile, the label will truncate automatically, so we want to
        // override that behaviour.
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: "normal",
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
          transition: "none",
        }),
      }}
      components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
      classNames={{
        control: ({ isFocused }) =>
          cn(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base,
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          cn(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base,
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
      {...props}
      // ADDED
      // isClearable={false}
      inputValue={inputValue}
      // menuIsOpen={false}

      //       components={components}
      // onChange={(newValue) => setValue(newValue)}
      onChange={(newValue) => {
        const nextValues = castArray(newValue ?? [])
        // const nextValue = uniq(nextValues)
        const nextValue = nextValues
        setValue(nextValue)
      }}
      onInputChange={(newValue) => setInputValue(newValue)}
      onKeyDown={handleKeyDown}
      //       placeholder="Type something and press enter..."
      value={value}
    />
  )
}
