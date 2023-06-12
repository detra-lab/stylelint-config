import { defineConfig } from 'tsup'

const ENTRIES = {
  index: './src/css.ts',
  sass: './src/sass.ts',
  styled: './src/styled.ts'
}

export default defineConfig({
  clean: false,
  dts: true,
  entry: ENTRIES,
  format: ['cjs'],
  outDir: '.',
  platform: 'node',
  sourcemap: false,
  splitting: false,
  target: 'node16'
})
