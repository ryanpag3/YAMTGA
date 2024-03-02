import fp from 'fastify-plugin';
import FastifySensible from '@fastify/sensible';
import type { SensibleOptions } from '@fastify/sensible';

export default fp<SensibleOptions>(async (fastify) => {
    void fastify.register(FastifySensible);
});