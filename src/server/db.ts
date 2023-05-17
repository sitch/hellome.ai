import { PrismaClient, type Prisma } from "@prisma/client"

const options: Prisma.PrismaClientOptions = {
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient(options)

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

// export async function connectDB() {
//   try {
//     await prisma.$connect()
//     console.log("🚀 Database connected successfully")
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   } finally {
//     await prisma.$disconnect()
//   }
// }
