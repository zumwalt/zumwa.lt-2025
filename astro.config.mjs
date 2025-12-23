// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: [
        "three",
        "@react-three/fiber",
        "@react-three/postprocessing", 
        "postprocessing",
        "troika-three-text"
      ],
    },
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist Mono",
        cssVariable: "--font-mono",
      },
    ],
  },
});
