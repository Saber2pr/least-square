import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {
  uglify
} from 'rollup-plugin-uglify'

export default {
  input: './lib/app.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    name: 'test',
    banner: `var process = {
      env: {
        NODE_ENV: ''
      }
    }`
  },
  watch: {
    include: 'lib/**'
  },
  plugins: [resolve(), commonjs(), uglify()]
}