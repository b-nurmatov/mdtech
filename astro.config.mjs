// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (chunkInfo) => {
            if (chunkInfo.name && chunkInfo.name.endsWith(".css")) {
              return "assets/styles[extname]"; // или просто 'styles.css' без хеша
            }
            return "assets/[name][extname]";
          },
        },
      },
    },
  },
  server: {
    host: "192.168.0.220",
  },
  compressHTML: false,
});
