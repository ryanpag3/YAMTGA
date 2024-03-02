import type { FastifyCorsOptions } from '@fastify/cors';
import FastifyCors from '@fastify/cors';
import fp from 'fastify-plugin';

export default fp<FastifyCorsOptions>(async (fastify) => {
    void fastify.register(FastifyCors, {
        // TODO: turn on when AuthN is introduced.
        // credentials: true,

        // TODO: turn on when React is introduced.
        // origin: [
        //     'http://localhost:8080'
        // ]
    });
});