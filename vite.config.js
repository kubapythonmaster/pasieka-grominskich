import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/pasieka-grominskich/" : "/",
  plugins: [react()],
  server: {
    port: 5192,
    strictPort: true,
    host: true,
  },
});
