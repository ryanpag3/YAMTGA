import Cookie from '@fastify/cookie';
import type { FastifyCookieOptions } from '@fastify/cookie';
import fp from 'fastify-plugin';

export default fp<FastifyCookieOptions>(async (fastify) => {
    void fastify.register(Cookie, {
        secret: 'replaceme'
    })
});