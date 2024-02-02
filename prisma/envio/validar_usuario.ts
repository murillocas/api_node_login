import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function login(data:any) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.query.email,
      },
    });
    if(user?.senha == data.query.senha){
        return 
    }
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

