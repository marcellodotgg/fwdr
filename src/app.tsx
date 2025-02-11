import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export const BASE_URL = "https://api.fwdr.dev";
// export const BASE_URL = "http://localhost:8080";

export default function App() {
  return (
    <Router
        base={import.meta.env.SERVER_BASE_URL}
      root={props => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
