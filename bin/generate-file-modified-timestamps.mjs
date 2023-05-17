import { mkdir } from "fs/promises"
import path from "path"

import gitDateExtractor from "git-date-extractor"

const cwd = process.cwd()

/**
 * Generate timestamps for `next-sitemaps` to use.
 * @typedef {Parameters<import("git-date-extractor").getStamps>[0]} InputOptions
 * @param {InputOptions & Required<Pick<InputOptions, "projectRootPath" | "outputFileName">>} options
 */
async function generate({ projectRootPath, outputFileName, ...options }) {
  await mkdir(path.dirname(outputFileName), { recursive: true })
  await gitDateExtractor.getStamps({
    debug: false,
    outputToFile: true,
    outputFileName: path.resolve(cwd, outputFileName),
    projectRootPath: path.resolve(cwd, projectRootPath),
    ...options,
  })
}

async function run() {
  await Promise.all([
    generate({
      allowFiles: ["*.mdx"],
      projectRootPath: "@mdx/blog/articles",
      outputFileName: "resources/timestamps/blog-articles-timestamps.json",
    }),
    generate({
      allowFiles: ["*.mdx"],
      projectRootPath: "@mdx/blog/authors",
      outputFileName: "resources/timestamps/blog-authors-timestamps.json",
    }),
    generate({
      files: ["logo.png"],
      projectRootPath: "resources",
      outputFileName: "resources/timestamps/favicon-timestamps.json",
    }),
    generate({
      files: ["openapitools.json", "openapi.lulu.yml"],
      projectRootPath: "./",
      outputFileName: "resources/timestamps/lulu-timestamps.json",
    }),
  ])
}

void run()
