import prisma from '../utils/prisma';

export default async () => {
    await prisma.$transaction([
        prisma.user.deleteMany()
    ]);
}