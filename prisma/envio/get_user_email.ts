import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function find_user_by_email(data:any) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.query.email,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

