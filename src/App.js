import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rockets from "./Components/Rockets";

import Main from "./Components/Dashbored";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/dashbored", element: <Main /> },
        { path: "/Rocket", element: <Rockets /> },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
