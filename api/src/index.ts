// Load runtime config before *anything* else.
require('dotenv').config();

import closeWithGrace from 'close-with-grace';
import Fastify from 'fastify';
import app from './app';
import isProd from './utils/is-prod';
import logger from './utils/logger';

// Instantiate server.
const server = Fastify({
    logger: !isProd
});

// Register app as a plugin.
void server.register(app);

const closeListeners = closeWithGrace({ delay: 500 }, async (opts: any) => {
    if (opts.err) {
        logger.error(opts.err);
    }
    await server.close();
});

server.addHook('onClose', (_instance, done) => {
    closeListeners.uninstall();
    done();
});

void server.listen({
    port: Number(process.env.PORT ?? 3000),
    host: process.env.SERVER_HOSTNAME ?? '127.0.0.1'
});

void server.ready((err) => {
    if (err) {
        logger.error(err);
        process.exit(1);
    }

    logger.info('YAMTGA API server is ready!');
    logger.debug(server.printRoutes());
});

export { server as app };