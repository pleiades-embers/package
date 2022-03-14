import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `$injectedColor: orange;`
    //   }
    // }
  },
  resolve:{
    alias:{
      '@':resolve(__dirname,'./src'),
      'style':resolve(__dirname,'./src/styles') 
    }
  },
  esbuild:{},
  plugins: [vue(),vueJsx()]
})
