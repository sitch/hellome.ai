/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowLeft,
  DownloadCloud,
  Edit,
  ShoppingCart,
  Waves,
} from "lucide-react"
import { useSnapshot } from "valtio"

import { Button } from "@/components/ui/button"
import { state } from "@/components/books/BookCustomizer/store"
import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"
import AnimatedText from "@/components/common/AnimatedText/AnimatedText"

import { CharacterForm } from "@/forms/characters/character-form"

const transition = { type: "spring", duration: 0.8 }
const config = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
}

export function Overlay() {
  const snap = useSnapshot(state)

  const header = (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      <Waves size={40} />
      <motion.div
        animate={
          snap.page === "intro" ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
        }
        transition={transition}
      >
        <ShoppingCart size="3em" />
      </motion.div>
    </motion.header>
  )

  const intro = snap.page === "intro" && (
    <div
      // className="section--container"

      // className="ml-4"
      // className="w-1/3 rounded-lg border border-white bg-white/50"
      className="section--container w-1/3 rounded-lg border border-white bg-white/50"
    >
      {/* <div
        // className="support--content"
        className=""
      > */}
      <motion.div
        // className=""
        // className="mt-2 absolute right-0 origin-top-right"

        key="title"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 5,
          stiffness: 40,
          restDelta: 0.001,
          duration: 0.3,
        }}
      >
        {/* <h1
        // className=" w-1/3 italic font-extrabold"
        // className="  text-lg prose"
      > */}
        {/* Hello You. */}
        {/* Hello <AnimatedText theme="space">YOU</AnimatedText> */}
        {/* </h1> */}

        <h1>
          <AnimatedText theme="space">Hello You</AnimatedText>
          {/* <div className="p-7 text-7xl w-full">👋👋🏻👋🏼👋🏽👋🏾👋🏿</div> */}
          {/* 👋👋🏻👋🏼👋🏽👋🏾👋🏿 */}
        </h1>

        <h2 className="w-full p-7 text-7xl">👋👋🏻👋🏼👋🏽👋🏾👋🏿</h2>
      </motion.div>
      {/* </div> */}
      {/* <div */}
      {/* // className="support--content" */}
      {/* className="" */}
      {/* > */}
      <motion.div
        className=""
        key="p"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 7,
          stiffness: 30,
          restDelta: 0.001,
          duration: 0.6,
          delay: 0.2,
          delayChildren: 0.2,
        }}
      >
        <p>
          Create your unique and exclusive story with our brand-new 3D
          customization tool. <strong>Unleash your imagination</strong> and
          define your own style.
        </p>
        <Button
          className="button"
          style={{ background: snap.color }}
          onClick={() => (state.page = "book")}
        >
          <Edit size="1.3em" />
          Customize Book
        </Button>
      </motion.div>
      {/* </div> */}
    </div>
  )

  const toolbar = (
    <motion.section key="toolbar" {...config}>
      {/* <Customizer /> */}

      <motion.div
        // className=""
        // className="mt-2 absolute right-0 origin-top-right"

        className="absolute bottom-0 w-screen origin-bottom bg-green-100 p-24"
        key="dialog"
        initial={{
          // x: 100,
          opacity: 0,
        }}
        animate={{
          // x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          damping: 5,
          stiffness: 40,
          restDelta: 0.001,
          duration: 0.3,
        }}
      >
        <div
        //  className="absolute bottom-0 w-screen p-24 bg-green-100"
        >
          Hey
        </div>
      </motion.div>
    </motion.section>
  )

  return (
    <div
      className="absolute left-0 top-0 h-full w-full overflow-hidden"
      // style={{
      //   position: "absolute",
      //   top: 0,
      //   left: 0,
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      {header}

      <AnimatePresence>
        {snap.page === "intro" && (
          <motion.section key="main" {...config}>
            {intro}
          </motion.section>
        )}

        {snap.page === "book" && (
          <motion.section key="custom" {...config}>
            <Customizer />
          </motion.section>
        )}

        {snap.page === "character" && (
          <motion.section key="character" {...config}>
            {/* <h3>CharacterLayer</h3> */}

            <div
              className="customizer"
              // className="customizer align-center w-100 h-100 bg-green-200s mb-24 flex flex-col justify-end"
            >
              {/* <div className="decals">
  <div className="decals--container">
    {snap.decals.map((decal) => (
      <div
        key={decal}
        className={`decal`}
        onClick={() => (state.decal = decal)}
      >
        <img src={`/@meshes/${decal}_thumb.png`} alt="brand" />
      </div>
    ))}
  </div>
</div> */}

              <CharacterForm />
            </div>

            <Button
              className="button exit"
              style={{ background: snap.color }}
              onClick={() => (state.page = "book")}
            >
              <ArrowLeft size="1.3em" />
              GO BACK
            </Button>
          </motion.section>
        )}

        {/* {toolbar} */}
      </AnimatePresence>
    </div>
  )
}

function Customizer() {
  const snap = useSnapshot(state)
  return (
    <div
      className="customizer"
      // className="customizer align-center w-100 h-100 bg-green-200s mb-24 flex flex-col justify-end"
    >
      {snap.page === "book" && (
        <div className="color-options">
          {snap.colors.map((color) => (
            <div
              key={color}
              className={`circle`}
              style={{ background: color }}
              onClick={() => (state.color = color)}
            ></div>
          ))}
        </div>
      )}

      {/* {snap.page === "character" && (
        <div className="flex w-2/3 flex-col items-center justify-between bg-purple-300 p-4">

          <div className="w-1/2 rounded-lg border border-black bg-white/50 p-4">
            <CharacterForm />
          </div>
        </div>
      )} */}

      <span>
        <Button
          className="button"
          style={{ background: snap.color }}
          onClick={() => (state.page = "character")}
        >
          <Edit size="1.3em" />
          Customize Character
        </Button>
        <AnimatedButton
          icon={DownloadCloud}
          className="share"
          // style={{ background: snap.color }}
          // onClick={() => {
          //   const link = document.createElement("a")
          //   link.setAttribute("download", "canvas.png")
          //   link.setAttribute(
          //     "href",
          //     document!
          //       .querySelector("canvas")!
          //       .toDataURL("image/png")
          //       .replace("image/png", "image/octet-stream"),
          //   )
          //   link.click()
          // }}
        >
          {/* <DownloadCloud size="1.3em" /> */}
          DOWNLOAD
        </AnimatedButton>
        <Button
          className="button exit"
          style={{ background: snap.color }}
          onClick={() => (state.page = "intro")}
        >
          <ArrowLeft size="1.3em" />
          GO BACK
        </Button>
      </span>
    </div>
  )
}
