import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss(),
      terser(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['/src/stories', '**/*.stories.tsx'],
      }),
    ],
  },
  {
    input: 'lib/esm/index.d.ts',
    output: [
      {
        file: 'lib/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [dts()],
  },
];
