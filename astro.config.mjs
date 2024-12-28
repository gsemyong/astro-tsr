// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-react-compiler",
            {
              target: "19",
            },
          ],
        ],
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    plugins: [
      TanStackRouterVite({
        routesDirectory: "src/app/routes",
        generatedRouteTree: "src/app/routeTree.gen.ts",
      }),
    ],
  },
  adapter: node({
    mode: "standalone",
  }),
});
