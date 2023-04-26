import Image from "next/image"
import Link from "next/link"

import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"

export default function Custom404() {
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <Image
            src="/static/images/404.png"
            height={600}
            width={600}
            alt="Cow Drawing"
          />

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-gray-500">We can't find that page.</p>

          <div className="pt-6 text-center">
            <Link href="/">
              <AnimatedButton caret="left">Home</AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
