import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root</div>,
    errorElement: <p>error</p>,

    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
  },
]);

export default router