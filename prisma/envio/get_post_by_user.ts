// Importe o PrismaClient
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPostsByUser(data:any): Promise<any[]> {
    try {
      const posts = await prisma.post.findMany({
        where: {
          authorId: data.query.userId,
        },
      });
      return posts;
    } catch (error) {
      console.error('Erro ao obter os posts do usuário:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }