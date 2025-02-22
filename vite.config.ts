import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Render को सर्वर एक्सपोज़ करने के लिए
    port: process.env.PORT || 5173, // Render द्वारा दिए गए पोर्ट का उपयोग करें
  },
  preview: {
    port: process.env.PORT || 5173, // Preview mode के लिए भी पोर्ट सेट करें
  },
});
