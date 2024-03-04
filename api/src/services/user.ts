import prisma from '../utils/prisma'

export const createUser = async (user: {
    name: string;
}) => {
    return prisma.user.create({
        data: user
    });
}