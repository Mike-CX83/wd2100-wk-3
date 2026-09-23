import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  resolve: {
    alias: {
      // @/components/... instead of a long relative path
      "@": path.resolve(__dirname, "./src"),
    },
  },
});