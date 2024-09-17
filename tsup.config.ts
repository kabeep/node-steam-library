import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    target: ['esnext'],
    bundle: true,
    clean: !opts.watch,
    treeshake: opts.watch ? false : 'smallest',
    splitting: false,
    cjsInterop: true,
    legacyOutput: false,
    dts: true,
}));