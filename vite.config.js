import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Netflix-clone",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
})
