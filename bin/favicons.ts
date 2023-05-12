import { mkdir, writeFile } from "fs/promises"
import path from "path"

import favicons, {
  type FaviconFile,
  type FaviconImage,
  type FaviconResponse,
} from "favicons"
import prettier from "prettier"

// eslint-disable-next-line @limegrass/import-alias/import-alias
import pwaConfig from "../pwa.config.js"

const colors = {
  reset: "\\033[0m",

  //text color
  black: "\\033[30m",
  red: "\\033[31m",
  green: "\\033[32m",
  yellow: "\\033[33m",
  blue: "\\033[34m",
  magenta: "\\033[35m",
  cyan: "\\033[36m",
  white: "\\033[37m",

  //background color
  blackBg: "\\033[40m",
  redBg: "\\033[41m",
  greenBg: "\\033[42m",
  yellowBg: "\\033[43m",
  blueBg: "\\033[44m",
  magentaBg: "\\033[45m",
  cyanBg: "\\033[46m",
  whiteBg: "\\033[47m",
}

const info = (...args: any[]) => {
  console.log(`${colors.green}[bin/favicons]${colors.reset}`, ...args)
}

function templateForComponent({ html }: FaviconResponse) {
  const toJSX = (tag: string) => {
    return tag.replace(">", " />")
  }

  const isNextAppHeadTag = (tag: string) => {
    return tag.includes(`name="theme-color"`) || tag.includes(`name="viewport"`)
  }

  const jsx = html.map(toJSX)
  const appTags = jsx.filter((tag) => isNextAppHeadTag(tag))
  const documentTags = jsx.filter((tag) => !isNextAppHeadTag(tag))

  // add to App
  // <meta name="theme-color" content={site.theme} />
  {
    /* <meta name="theme-color" content={theme.palette.primary.main} /> */
  }
  // <meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
  // <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />

  // Add to Document
  /* <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" /> */

  return `
  const GeneratedAppHeadMetadata = () => (
    <>
      ${appTags.join("\n")}
    </>
  )

  const GeneratedDocumentHeadMetadata = () => (
    <>
      ${documentTags.join("\n")}
    </>
  )

	export const AppHeadMetadata = () => {
		return (
			<>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <GeneratedAppHeadMetadata />
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

        <GeneratedDocumentHeadMetadata />
			</>
		)
  }
  `
}

async function formatter(contents: string) {
  const options = await prettier.resolveConfig(process.cwd(), {
    editorconfig: true,
  })
  return prettier.format(contents, { parser: "babel", ...options })
}

async function writeComponent(response: FaviconResponse, dest: string) {
  const raw = templateForComponent(response)
  const content = await formatter(raw)
  await mkdir(path.dirname(dest), { recursive: true })
  await writeFile(dest, content)
  info(`Wrote component to: ${dest}`)
}

async function writeToDir(dir: string) {
  await mkdir(dir, { recursive: true })
  return async ({ name, contents }: FaviconFile | FaviconImage) =>
    await writeFile(path.join(dir, name), contents)
}

async function writeFavicons({ images }: FaviconResponse, dest: string) {
  await Promise.all(images.map(await writeToDir(dest)))
  info(`Wrote ${images.length} image(s) to: ${dest}`)
}

async function writeManifest({ files }: FaviconResponse, dest: string) {
  await Promise.all(files.map(await writeToDir(dest)))
  info(`Wrote ${files.length} manifest file(s) to: ${dest}`)
}

async function run() {
  const faviconOptions = pwaConfig.faviconOptions
  const logoPath = path.resolve(pwaConfig.logoPath)
  const faviconDir = path.resolve(pwaConfig.output.faviconDir)
  const componentPath = path.resolve(pwaConfig.output.componentPath)

  info(`Generating PWA...`)
  const response = await favicons(logoPath, faviconOptions)

  await writeManifest(response, faviconDir)
  await writeFavicons(response, faviconDir)
  await writeComponent(response, componentPath)
  info(`Done! 👍`)
}

void run()
