// Importe o PrismaClient
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Modelo para salvar um post
export async function savePost(data:any): Promise<any> {
  try {
    const post = await prisma.post.create({
      data: {
        title : data.title,
        content : data.content,
        published: false,
        authorId : data.authorId,
      },
    });
    return post;
  } catch (error) {
    console.error('Erro ao salvar o post:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}