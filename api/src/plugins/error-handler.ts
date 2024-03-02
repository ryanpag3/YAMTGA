import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import httpStatus from 'http-status';
import logger from '../utils/logger';

const FastifyErrorHandler: any = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    logger.error(error);
    void reply.status(httpStatus.INTERNAL_SERVER_ERROR).send('An unexpected error has occured.');
}

export default fp(async (fastify) => {
    void fastify.setErrorHandler(FastifyErrorHandler);
});