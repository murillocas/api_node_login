import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function all_users() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany()
  return allUsers;
}

