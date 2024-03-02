import type { AutoloadPluginOptions } from '@fastify/autoload';
import AutoLoad from '@fastify/autoload';
import type { FastifyPluginAsync } from 'fastify';
import { join } from 'path';
import EnvPlugin from './plugins/env';

export type AppOptions = {
    // Any custom options go here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
    
    // Load env plugin first to ensure that runtime config is available.
    await fastify.register(EnvPlugin);

    // Load all the other plugins.
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'plugins'),
        options: opts,
        ignoreFilter: (path) => path.endsWith('env.ts')
    });

    // Load all routes.
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'routes'),
        options: opts
    });
};

export default app;
export { app };
