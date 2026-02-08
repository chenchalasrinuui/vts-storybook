import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true   // 👈 creates index.d.ts
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "VTSUILibrary",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
});
