/* eslint-disable no-console */

import { type Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  errorFormat: 'pretty',
})

const stories: Prisma.StoryCreateInput[] = [
  // {
  //   name: "Michael Sitchenko",
  //   email: "msitchenko@fortressbiotech.com",
  //   roles: {
  //     connect: [
  //       { name: "ADMIN" },
  //       { name: "BUSINESS_DEVELOPMENT" },
  //       { name: "DEVELOPER" },
  //       { name: "ABA_ADMIN" },
  //     ],
  //   },
  // pages: {
  //   create: [
  //     {
  //       name: "ExUS",
  //       description: "ExUS List of Candidate Drugs",
  //       query: "",
  //     },
  //   ],
  // },
  // },
]

async function main() {
  console.info('Start seeding ...')

  await Promise.all(
    stories.map(async (data) => {
      const story = await prisma.story.create({ data })
      console.info(`Created story with id: ${story.id}`)
    })
  )

  console.info('Seeding finished.')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    void prisma.$disconnect().catch((error) => {
      console.error(error)
      process.exit(1)
    })
  })
