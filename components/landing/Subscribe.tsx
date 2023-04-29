import Image from "next/image"

import { DotTextureIcon } from "@/components/landing/icons"

const content = {
  // heading: "Create AI Personalized Children's Books",
  tag: {
    label: "Brand New",
  },
  heading: "HelloMe.ai",
  description: "Create AI Personalized Children's Books",
  action: {
    // label: "Join Waitlist",
    label: "Subscribe",
    description: "We are currently at capacity, check back soon!",
  },
}

export const Subscribe = () => {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 pt-16 sm:max-w-xl md:max-w-2xl md:px-8 lg:pt-32">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <div>
          <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
            {content.tag.label}
          </p>
        </div>
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <DotTextureIcon />
            <span className="relative">{content.heading.split(" ")[0]}</span>
          </span>{" "}
          {content.heading.split(" ").slice(1).join(" ")}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          {content.description}
        </p>
      </div>
      <form className="mb-4 flex w-full flex-col items-center md:flex-row md:px-16">
        <input
          placeholder="Email"
          required={true}
          type="text"
          className="focus:border-deep-purple-accent-400 focus:shadow-outline mb-3 h-12 w-full grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:outline-none md:mb-0 md:mr-2"
        />
        <button
          type="submit"
          className="bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none md:w-auto"
        >
          {content.action.label}
        </button>
      </form>
      <p className="mb-10 max-w-md text-xs text-gray-600 sm:text-sm md:text-center">
        {content.action.description}
      </p>
      {/* <img
        src="https://kitwind.io/assets/kometa/half-phone.png"
        className="mx-auto w-full md:w-auto md:max-w-xs"
        alt=""
        // height={240}
        // width={240}
      /> */}
    </div>
  )
}
