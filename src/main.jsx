import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { inject } from "@vercel/analytics";
import posthog from "posthog-js";
inject();

posthog.init("phc_gnfbhtpxbAZx2sKacxEAwEw49aGMIdmgdmzcFkTYhGG", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
      <App />
   
  </StrictMode>
);
