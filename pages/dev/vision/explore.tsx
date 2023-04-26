// pages/index.tsx

// See: https://docs.bunny.net/docs/bunny-ai-image-generation#blueprints
// See: https://docs.bunny.net/docs/bunny-ai-image-generation#blueprints
// See: https://docs.bunny.net/docs/bunny-ai-image-generation#blueprints
// See: https://docs.bunny.net/docs/bunny-ai-image-generation#blueprints
// See: https://docs.bunny.net/docs/bunny-ai-image-generation#blueprints
// See: https://docs.bunny.net/docs/bunny-ai-image-generation#blueprints

import { useState } from "react"
import type { NextPage } from "next"
import Image from "next/image"
import { range } from "lodash"

/**
 * Sanitize a URL.
 *
 * Source @braintree/sanitize-url
 * <https://github.com/braintree/sanitize-url>
 *
 * @param {string} url
 * @return {string}
 */
function sanitizeUrl(url: string | undefined) {
  if (!url) {
    return "about:blank"
  }

  const invalidProtocolRegex = /^(%20|\s)*(javascript|data|vbscript)/im
  const ctrlCharactersRegex = /[^\x20-\x7EÀ-ž]/gim
  const urlSchemeRegex = /^([^:]+):/gm
  const relativeFirstCharacters = [".", "/"]

  function _isRelativeUrlWithoutProtocol(url: string) {
    return relativeFirstCharacters.includes(url[0])
  }

  const sanitizedUrl = url.replace(ctrlCharactersRegex, "").trim()
  if (_isRelativeUrlWithoutProtocol(sanitizedUrl)) {
    return sanitizedUrl
  }

  const urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex)
  if (!urlSchemeParseResults) {
    return sanitizedUrl
  }

  const urlScheme = urlSchemeParseResults[0]
  if (invalidProtocolRegex.test(urlScheme)) {
    return "about:blank"
  }

  return sanitizedUrl
}

function sanitizePrompt(prompt: string): string {
  return sanitizeUrl(prompt.trim().replaceAll("\n", "").replaceAll(/\s+/g, "-"))
}

const config = {
  // engine: 'dalle-256',
  // engine: 'dalle-512',
  engine: "dalle-1024",
  // engine: 'sd15-512',
  // engine: 'sd21-512',
  // engine: 'sd21-768',
  // width: 256,
  // width: 512,
  width: 512,
  // width: 1024,

  //  blueprint: 'avatar',
  blueprint: "default",
}

function urlBunnyNet(index: number, prompt: string) {
  const seed = `${index}`
  return `https://bunnynet-avatars.b-cdn.net/.ai/img/${config.engine}/${
    config.blueprint
  }/${seed}/${sanitizePrompt(prompt)}.jpg?width=${config.width}`
}

const Explore: NextPage = () => {
  const [page, setPage] = useState(0)

  const pageSize = 12 * 5
  const pageOffset = page * pageSize

  // cute-mascot-100-arms-50-heads-Hecatoncheires-4k-logo
  const unusedPrompt = `
  cute pixel art of a bunny with a colorful solid background
  Hecatoncheires


  startup logo of a fun friendly cute funny monster with 100 hands and 50 heads
  logo for a startup named "hello me" with a monster face logo
  startup logo of a fun friendly funny cute silly monster with many arms and several heads
  cute friendly silly monster Morty with lots of arms and lots of heads in the style of dr seuss
  colorful simple cute friendly silly monster who draws
  colorful simple fun friendly funny cute silly emotions monster with many arms and several heads
  logo for a startup named hello me with a monster face logo simple googly eyes
  kid friendly logo with a cute silly cat monster
  silly cat named jinx
  startup logo of a fun friendly funny cute silly monster made out of a thumb print
  fun friendly funny cute silly monster made out of a thumb print
  logo of thumb prints made into a scuttling crab
  thumb prints made into a silly monster
  thumb prints made into a silly monster drawn simply
  silly monster made out of kids thumb prints
  startup logo of a fun friendly funny cute silly monster made out of a thumb print
  fun friendly funny cute silly monster made out of a thumb print

  cute silly friendly fun monster made out of a children's thumb
  startup logo of a child's thumbprint made into a cute monster




`

  const prompt = `
  cute  kids finger puppet monster






  `

  return (
    <div className="">
      <main className="h-screen">
        {/* <h1 className="text-6xl text-center my-10">
          Bunnynet.ai
        </h1> */}
        <h1 className="my-10 text-center text-3xl text-red-500">
          OFFSET:{page + pageOffset}
        </h1>

        {/* <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select> */}

        {/* <textarea name="prompt" value={sanitizePrompt(prompt)} /> */}
        {/* <textarea name="prompt">{sanitizePrompt(prompt)}</textarea> */}

        <div className="my-10 text-center">
          <button
            className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>{" "}
          <button
            className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
        <div
        // className="container mx-auto my-10 max-w-7xl cpx-4 sm:px-6 lg:px-60"
        >
          <div className="grid grid-cols-12 gap-4">
            {range(page + pageOffset, pageSize + pageOffset).map((index) => {
              const src = urlBunnyNet(index, prompt)
              const key = `${config.engine}${config.blueprint}${config.width}${prompt}${index}`

              return (
                <div key={key}>
                  <Image
                    src={src}
                    alt={key}
                    // download={src}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Explore
