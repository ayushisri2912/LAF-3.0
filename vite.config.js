import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router-dom") || id.includes("react-dom") || id.includes("react/")) {
              return "vendor-react";
            }
            if (id.includes("framer-motion")) {
              return "vendor-framer";
            }
            if (id.includes("lucide-react") || id.includes("react-icons")) {
              return "vendor-icons";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});