import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// Relative base so the build works whether it's served from a user page
// (username.github.io) or a project page (username.github.io/strangers/).
export default defineConfig({
    base: "./",
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.svg"],
            manifest: {
                name: "Strangers — A Connection Card Game",
                short_name: "Strangers",
                description: "Deep, meaningful questions to bring people closer. Three levels, fully playable offline.",
                theme_color: "#e02929",
                background_color: "#0e0e10",
                display: "standalone",
                icons: [
                    {
                        src: "favicon.svg",
                        sizes: "any",
                        type: "image/svg+xml",
                        purpose: "any",
                    },
                ],
            },
        }),
    ],
});
