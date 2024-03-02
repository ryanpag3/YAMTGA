import { FastifyInstance as OGFastify } from 'fastify';

declare module 'fastify' {
    interface FastifyInstance extends OGFastify {
        config: {
            PORT: number;
            HOSTNAME: string;
            COOKIE_SECRET: string;
        }
    }
}