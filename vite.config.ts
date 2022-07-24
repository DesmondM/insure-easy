import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "/assets/css/bootstrap.min.css",
        "/assets/css/fontawesome-all.min.css",
        "/assets/css/flaticon.css",
        "/assets/css/swiper.min.css",
        "/assets/css/animate.min.css",
        "/assets/css/pylon-icons.css",
        "/assets/css/odometer.min.css",
        "/assets/css/magnific-popup.css",
        "/assets/css/bootstrap-select.min.css",
        "/assets/css/nouislider.min.css",
        "/assets/css/nouislider.pips.css",
        "/assets/css/main.css",
      ],
    },
  },
});
