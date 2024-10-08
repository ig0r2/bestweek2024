import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsInclude: ["**/*.ttf"],
  },
  root: "src",
});
