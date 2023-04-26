import { Prisma, PrismaClient } from "@prisma/client"

const options: Prisma.PrismaClientOptions = {
  log: ["query"],
}

const globalPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalPrisma.prisma ?? new PrismaClient(options)

if (process.env.NODE_ENV !== "production") {
  globalPrisma.prisma = prisma
}

// import { PrismaClient } from '@prisma/client'

// declare global {
//   let prisma: PrismaClient | undefined
// }

// export const prisma = global.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') {
//   global.prisma = prisma
// }

async function connectDB() {
  try {
    await prisma.$connect()
    console.log("🚀 Database connected successfully")
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

export default connectDB
