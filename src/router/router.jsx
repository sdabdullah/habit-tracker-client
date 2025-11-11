import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../RootLayout/RootLayout";
import NotFound from "../Pages/NotFound";
import AddHabit from "../Pages/AddHabit";
import MyHabits from "../Pages/MyHabits";
import BrowsePublicHabits from "../Pages/BrowsePublicHabits";


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
            {
                path: '/my-habit',
                element: <MyHabits></MyHabits>
            },
            {
                path: '/browse-public-habits',
                element: <BrowsePublicHabits></BrowsePublicHabits>
            },
        ]
    }
])

export default router