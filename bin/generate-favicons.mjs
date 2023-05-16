/* eslint-disable @limegrass/import-alias/import-alias */

import { exec, execSync } from "child_process"
import { mkdir, writeFile } from "fs/promises"
import path from "path"

import favicons from "favicons"
import prettier from "prettier"

import pwaConfig from "../pwa.config.js"

/**
 * @typedef {import('favicons').FaviconFile} FaviconFile
 * @typedef {import('favicons').FaviconImage} FaviconImage
 * @typedef {import('favicons').FaviconResponse} FaviconResponse
 */

const colors = {
  green: "",
  reset: "",

  // reset: "\\033[0m",

  // //text color
  // black: "\\033[30m",
  // red: "\\033[31m",
  // green: "\\033[32m",
  // yellow: "\\033[33m",
  // blue: "\\033[34m",
  // magenta: "\\033[35m",
  // cyan: "\\033[36m",
  // white: "\\033[37m",

  // //background color
  // blackBg: "\\033[40m",
  // redBg: "\\033[41m",
  // greenBg: "\\033[42m",
  // yellowBg: "\\033[43m",
  // blueBg: "\\033[44m",
  // magentaBg: "\\033[45m",
  // cyanBg: "\\033[46m",
  // whiteBg: "\\033[47m",
}

/**
 * @param {any[]} args
 */
const info = (...args) => {
  console.log(`${colors.green}[bin/favicons]${colors.reset}`, ...args, "\n")
}

/**
 * @param {FaviconResponse} response
 */
function templateForComponent({ html }) {
  /**
   * @param {string} tag
   */
  const toJSX = (tag) => {
    return tag.replace(">", " />")
  }

  /**
   * @param {string} tag
   */
  const isNextAppHeadTag = (tag) => {
    return tag.includes(`name="theme-color"`) || tag.includes(`name="viewport"`)
  }

  const jsx = html.map(toJSX)
  const appTags = jsx.filter((tag) => isNextAppHeadTag(tag))
  const documentTags = jsx.filter((tag) => !isNextAppHeadTag(tag))

  // add to App
  // <meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
  // <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />

  // Add to Document
  /* <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" /> */

  return `
  const GeneratedNextAppHeadMetadata = () => (
    <>
      ${appTags.join("\n")}
    </>
  )

  const GeneratedNextDocumentHeadMetadata = () => (
    <>
      ${documentTags.join("\n")}
    </>
  )

	export const AppHeadMetadata = () => {
		return (
			<>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <GeneratedNextAppHeadMetadata />
			</>
		)
  }

	export const DocumentHeadMetadata = () => {
		return (
			<>
        <meta charSet="UTF-8" />
        <meta name="version" content="${pwaConfig.faviconOptions.version}" />

        {/* See: https://nextjs.org/docs/messages/react-hydration-error */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />

        <GeneratedNextDocumentHeadMetadata />
			</>
		)
  }
  `
}

/**
 * @param {string} contents
 */
async function formatter(contents) {
  const options = await prettier.resolveConfig(process.cwd(), {
    editorconfig: true,
  })
  return prettier.format(contents, { parser: "babel", ...options })
}

/**
 * @param {FaviconResponse} response
 * @param {string} dest
 */
async function writeComponent(response, dest) {
  const raw = templateForComponent(response)
  const content = await formatter(raw)
  await mkdir(path.dirname(dest), { recursive: true })
  await writeFile(dest, content)
  info(`Wrote component to: ${dest}`)
}

/**
 * @typedef {FaviconFile | FaviconImage} FaviconDescription
 */

/**
 * @param {string} dir
 */
async function writeToDir(dir) {
  await mkdir(dir, { recursive: true })
  /**
   * @param {FaviconDescription} description
   */
  return async ({ name, contents }) =>
    await writeFile(path.join(dir, name), contents)
}

/**
 * @param {FaviconResponse} response
 * @param {string} dest
 */
async function writeFavicons({ images }, dest) {
  await Promise.all(images.map(await writeToDir(dest)))
  info(`Wrote ${images.length} image(s) to: ${dest}`)
}

/**
 * @param {FaviconResponse} response
 * @param {string} dest
 */
async function writeManifest({ files }, dest) {
  await Promise.all(files.map(await writeToDir(dest)))
  info(`Wrote ${files.length} manifest file(s) to: ${dest}`)
}

async function generate() {
  const faviconOptions = pwaConfig.faviconOptions
  const logoPath = path.resolve(pwaConfig.logoPath)
  const faviconDir = path.resolve(pwaConfig.output.favicons.dir.data)
  const componentPath = path.resolve(pwaConfig.output.component.path)

  info(`Generating PWA...`)
  const response = await favicons(logoPath, faviconOptions)

  await writeManifest(response, faviconDir)
  await writeFavicons(response, faviconDir)
  await writeComponent(response, componentPath)
  info(`Done! 👍`)
}

function mostRecentGitCommitTime() {
  const stdout = execSync("git log -1 --format=%ct")
  return parseInt(stdout.toString())
}

/**
 * @param {string} logoFilename
 */
function faviconModifiedTime(logoFilename) {
  const timestampFile = "@gen/next-pwa/favicon-timestamps.json"
  const stdout = execSync(`jq '.["${logoFilename}"].modified' ${timestampFile}`)
  return parseInt(stdout.toString())
}

/**
 * Read most recent git commit and check if it's after the most recent edit time for our favicon
 */
async function run() {
  const logoFilename = path.basename(pwaConfig.logoPath)

  try {
    if (mostRecentGitCommitTime() > faviconModifiedTime(logoFilename)) {
      info(`Skipping. ${logoFilename} not recently modified.`)
      return
    }
  } catch {
    // if `jq` isn't available, bypass timestamp check
    info(`Skipping. jq not available`)
  }

  await generate()
}

void run()
