import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

// Load environment variables from .env file
config();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.cwd(), "src"), // Use process.cwd() to resolve the project root
    },
  },
  build: {
    outDir: "dist", // Ensure the build output is in the dist folder
  },
});
