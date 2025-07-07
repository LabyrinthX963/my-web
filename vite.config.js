import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {},
  },
  closeBundle() {
    const from = resolve(__dirname, "dist/redirects");
    const to = resolve(__dirname, "dist/_redirects");
    if (fs.existsSync(from)) {
      fs.renameSync(from, to);
      console.log("✅ Renamed redirects → _redirects");
    } else {
      console.warn("⚠️  'redirects' not found in dist/");
    }
  },
});
