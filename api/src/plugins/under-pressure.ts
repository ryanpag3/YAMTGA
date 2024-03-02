import fp from 'fastify-plugin';
import UnderPressure from '@fastify/under-pressure';
import type { UnderPressureOptions } from '@fastify/under-pressure';

export default fp<UnderPressureOptions>(async (fastify) => {
    void fastify.register(UnderPressure, {
        // TODO: profile these values.
        // maxEventLoopDelay: 1000,
        // maxHeapUsedBytes: 10000000,
        // maxRssBytes: 10000000,
        // maxEventLoopUtilization: 0.98
    });
});