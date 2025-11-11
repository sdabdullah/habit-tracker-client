import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../RootLayout/RootLayout";
import NotFound from "../Pages/NotFound";
import AddHabit from "../Pages/AddHabit";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <NotFound></NotFound>,

        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-habit',
                element: <AddHabit></AddHabit>
            },
        ]
    }
])

export default router