import { useEffect, useState } from "react"

import { type LoaderSizeMarginProps } from "react-spinners/helpers/props"
import PulseLoader from "react-spinners/PulseLoader"
import { motion } from "framer-motion"

import { Skeleton } from "@/components/ui/skeleton"

import { LogoMesh } from "@/scenes/meshes/LogoMesh"

type PageLoaderProps = LoaderSizeMarginProps & {
  // add here
}

export function PageLoader(props: PageLoaderProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => setReady(true), [])

  if (!ready) {
    return null
  }
  return <>{/* <LogoMesh /> */}</>

  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )

  return (
    // <motion.div
    //   initial={{ x: 300, opacity: 0 }}
    //   animate={{ x: 0, opacity: 1 }}
    //   exit={{ x: 300, opacity: 0 }}
    //   transition={{
    //     type: "spring",
    //     stiffness: 260,
    //     damping: 20,
    //   }}
    // >
    <PulseLoader
      size={12}
      margin={4}
      className="opacity-40"
      color="#3d369773"
      {...props}
    />
    // </motion.div>
  )
}
