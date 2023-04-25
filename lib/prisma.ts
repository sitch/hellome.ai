import { Prisma, PrismaClient } from '@prisma/client'

const options: Prisma.PrismaClientOptions = {
  log: ['query'],
}

const globalPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalPrisma.prisma ?? new PrismaClient(options)

if (process.env.NODE_ENV !== 'production') {
  globalPrisma.prisma = prisma
}
