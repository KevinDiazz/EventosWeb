import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: { environment: "jsdom",
globals:true },
esbuild: {
  loader: "jsx",
  include: /src\/.*\.jsx?$/,
  // loader: "tsx",
  // include: /src\/.*\.[tj]sx?$/,
  exclude: [],
},
optimizeDeps: {
  esbuildOptions: {
    plugins: [
      {
        name: "load-js-files-as-jsx",
        setup(build) {
          build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
            loader: "jsx",
            contents: await fs.readFile(args.path, "utf8"),
          }));
        },
      },
    ],
  },
},
});
