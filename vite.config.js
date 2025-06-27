


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 
 plugins: [react()],
  //adding antd from here
  css:{
    preprocessorOptions:{
      less: {
        modifyVars:{
          '@primary-color' : '#9E3DAF',
          '@secondary-color': '#B857C5',
          '@light-color': '#D98CE0'
        },
        javascriptEnabled: true,
      }
    }
  }
  //end here
});
