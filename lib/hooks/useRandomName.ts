import maleNames from '@stdlib/datasets-male-first-names-en'
import femaleNames from '@stdlib/datasets-female-first-names-en'
import { shuffle, sample } from 'lodash'
import { useEffect, useState } from 'react'

export const DEFAULT_INTERVAL_MS = 1000
export const DEFAULT_INITIAL_NAME = 'Me'

let names: string[] | undefined = undefined

const getRandomName = (): string => {
  return sample(names!)!
}

export type UseRandomNameProps = {
  initialName?: string
  intervalMs?: number
}

export function useRandomName(props?: UseRandomNameProps) {
  // instantiate names
  names ??= shuffle([...maleNames(), ...femaleNames()])

  const intervalMs = props?.intervalMs ?? DEFAULT_INTERVAL_MS
  const initialName = props?.initialName ?? DEFAULT_INITIAL_NAME

  const [randomName, setRandomName] = useState(initialName)

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomName(getRandomName)
    }, intervalMs)
    return () => clearInterval(interval)
  }, [intervalMs])

  return randomName
}
