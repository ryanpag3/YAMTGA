import fp from 'fastify-plugin';
import FastifySwagger from '@fastify/swagger';
import { version } from '../../package.json';
import logger from '../utils/logger';
import isProd from '../utils/is-prod';
import FastifySwaggerUI from '@fastify/swagger-ui';

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

    if (!isProd) {
        void fastify.register(FastifySwaggerUI, {
            routePrefix: '/documentation'
        });
        logger.debug('@fastify/swagger-ui loaded.')
    }

    logger.debug('@fastify/swagger loaded.');
});