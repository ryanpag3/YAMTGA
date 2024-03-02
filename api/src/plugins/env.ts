import type { FastifyEnvOptions } from '@fastify/env';
import env from '@fastify/env';
import fp from 'fastify-plugin';

const schema = {
    type: 'object',
    required: ['COOKIE_SECRET'],
    properties: {
        PORT: {
            type: 'number',
            default: 3000
        },
        HOSTNAME: {
            type: 'string',
            default: '127.0.0.1'
        },
        COOKIE_SECRET: {
            type: 'string'
        },
        LOG_LEVEL: {
            type: 'string',
            default: 'info'
        }
    }
};

const options = {
    confKey: 'config',
    schema,
    dotenv: true
};

export default fp<FastifyEnvOptions>(async (fastify) => {
    await fastify.register(env, options);
});