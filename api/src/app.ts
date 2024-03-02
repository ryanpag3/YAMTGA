import type { AutoloadPluginOptions } from '@fastify/autoload';
import AutoLoad from '@fastify/autoload';
import type { FastifyPluginAsync } from 'fastify';
import { join } from 'path';

export type AppOptions = {
    // Any custom options go here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
    // Load all plugins.
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'plugins'),
        options: opts
    });

    // Load all routes.
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'routes'),
        options: opts
    });
};

export default app;
export { app };
