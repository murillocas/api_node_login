import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const userData = {
  "name": "Nome do Cliente",
  "email": "123@gmail.com",
  "senha": "teste"
};

export async function create_user(info:any) {
  try {
    console.log("testestestestes" + info)
    const user = await prisma.user.create({
      data: {
        name: info.name,
        email: info.email,
        senha: info.senha,
      }
    });
    console.log(user);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}