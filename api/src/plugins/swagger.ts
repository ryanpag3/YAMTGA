import fp from 'fastify-plugin';
import FastifySwagger from '@fastify/swagger';
import { version } from '../../package.json';
import logger from '../utils/logger';

export default fp(async (fastify) => {
    void fastify.register(FastifySwagger, {
        swagger: {
            info: {
                title: 'YAMGTA API',
                description: 'YAMTGA API documentation',
                version
            },
            host: 'localhost',
            schemes: ['http', 'https'],
            consumes: ['application/json'],
            produces: ['application/json']
        }
    });
    logger.debug('@fastify/swagger loaded.');
});