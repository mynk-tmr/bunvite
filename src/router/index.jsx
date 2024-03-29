import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../root/page";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" Component={HomePage} />
        <Route
          path="*"
          element={
            <h1 className="text-red-500 text-3xl text-center">
              Page not found
            </h1>
          }
        />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
