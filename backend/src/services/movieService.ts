import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const movieService = {
    getAll: async () => prisma.movie.findMany(),
    getById: async (id: number) => prisma.movie.findUnique({ where: { id } }),
    searchByTitle: async (title: string) => prisma.movie.findMany({
        where: { title: { contains: title, mode: 'insensitive' } }
    }),
    create: async (data: any) => prisma.movie.create({ data }),
    update: async (id: number, data: any) => prisma.movie.update({ where: { id }, data }),
    delete: async (id: number) => prisma.movie.delete({ where: { id } }),
}