import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

// Load environment variables from .env file
config();
const __dirname = path.resolve();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for easy imports
    },
  },
  build: {
    outDir: "dist", // Ensure the build output is in the dist folder
  }
});
