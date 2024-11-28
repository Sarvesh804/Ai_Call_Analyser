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
      "@": path.resolve(__dirname, "./src"), // Alias for easy imports
    },
  },
  define: {
    'process.env': process.env, // Make process.env available in the build
  },
  build: {
    outDir: "dist", // Ensure the build output is in the dist folder
  }
});
