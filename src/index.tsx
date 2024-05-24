import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { getWeaponsCount, getWeapons } from "./api/fetchCalls";

import App from "./App";
import DatasheetsPage from "./pages/dataSheetsPage";
import HomePage from "./pages/homePage";

import { WeaponsPageLoader } from "./types/datasheetTypes";

export const weaponsPageLoader = async (
  page: string
): Promise<WeaponsPageLoader> => {
  const pageNumber = Number(page);
  const weaponsCount = await getWeaponsCount();
  if (weaponsCount == null) {
    throw Error("Weapons count is null");
  }
  const totalPages = Math.floor(weaponsCount / 100);
  return { totalPages, pageNumber, weaponsCount };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops, something went wrong</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "datasheets/page/:page",
        element: <DatasheetsPage />,
        loader: ({ params }) => weaponsPageLoader(params.page as string),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
