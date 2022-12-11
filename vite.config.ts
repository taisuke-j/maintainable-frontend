/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./vitest.setup.ts",
  },
});
