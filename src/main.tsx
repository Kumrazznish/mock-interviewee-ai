import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";

import "./index.css";
import { App } from "./App";
import { ToasterProvider } from "./providers/toaster-provider";

// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_aW1tZW5zZS1tYW4tMjIuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
      <ToasterProvider />
    </ClerkProvider>
  </StrictMode>
);
