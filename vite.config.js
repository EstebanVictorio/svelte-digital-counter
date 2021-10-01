import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import path from "path"

const root = path.resolve('src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: `${root}/components`,
      ds: `${root}/ds`,
      workers: `${root}/workers`,
    },
    extensions: ['.ts', '.svelte']
  },
  plugins: [svelte()]
})
