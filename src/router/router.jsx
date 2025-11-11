import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../RootLayout/RootLayout";
import NotFound from "../Pages/NotFound";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <NotFound></NotFound>,

    children: [
        {
            index: true,
            path: '/',
            element: <Home></Home>,

            
        }
    ]
  },
]);

export default router