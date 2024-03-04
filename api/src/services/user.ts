import prisma from '../utils/prisma'
import { Prisma } from '@prisma/client';

export const createUser = async (userCreateArgs: Prisma.UserCreateArgs) => {
    return prisma.user.create(userCreateArgs);
}