import { createBrowserRouter } from "react-router";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import App from "./App.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "dashboard", Component: Dashboard }, // changed to relative path
    ],
  },
]);
