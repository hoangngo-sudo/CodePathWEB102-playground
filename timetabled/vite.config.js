import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './CodePathWEB102-playground/tree/main/timetabled',
  plugins: [react()]
  // server: {
  //   open:true,
  //   port: 5173
  // }
})
