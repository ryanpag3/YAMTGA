import { expect, test, vi } from 'vitest';
import { createUser } from './user';
import prisma from '../utils/__mocks__/prisma';

vi.mock('../utils/prisma');

test('createUser should return the generated user', async () => {
    const newUser = { name: 'ryan' };
    const uuid = 'b3a034d7-afe8-46e9-9087-cd5548357e42';
    prisma.user.create.mockResolvedValue({ ...newUser, id: uuid });
    const user = await createUser(newUser);
    expect(user).toEqual({ ...newUser, id: uuid });
});