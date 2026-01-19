import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, existsSync, mkdirSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Plugin para copiar _redirects para dist
    {
      name: "copy-redirects",
      closeBundle() {
        const redirectsSrc = "public/_redirects";
        const redirectsDest = "dist/_redirects";
        
        if (existsSync(redirectsSrc)) {
          if (!existsSync("dist")) {
            mkdirSync("dist");
          }
          copyFileSync(redirectsSrc, redirectsDest);
          console.log("✓ _redirects copiado para dist/");
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));