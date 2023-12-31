import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    viteTsconfigPaths(),
    //   svgrPlugin(),
    //   handlebars({
    //     partialDirectory: resolve(__dirname, 'src/partials'),
    //   }) as Plugin,
  ],
  server: {
    port: 3000,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
    deps: {
      inline: ["ag-grid-react"],
    },
    reporters: ["html", "junit"],
    outputFile: "./output/test/junit.xml",
    coverage: {
      provider: "v8",
      reporter: ["html", "cobertura", "text"],
      reportsDirectory: "./output/coverage",
    },
  },
});
