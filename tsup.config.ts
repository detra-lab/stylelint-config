import { defineConfig } from 'tsup'

const ENTRIES = {
  css: './src/css.ts',
  sass: './src/sass.ts',
  styled: './src/styled.ts'
}

type Config = ReturnType<typeof defineConfig>

const config: Config = {
  dts: true,
  clean: false,
  outDir: '.',
  entry: ENTRIES,
  format: ['cjs'],
  target: 'es2020',
  platform: 'node',
  sourcemap: false,
  splitting: false
}

// eslint-disable-next-line no-restricted-exports
export default defineConfig(config)
