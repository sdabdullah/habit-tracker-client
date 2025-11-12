import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../RootLayout/RootLayout";
import NotFound from "../Pages/NotFound";
import AddHabit from "../Pages/AddHabit";
import MyHabits from "../Pages/MyHabits";
import BrowsePublicHabits from "../Pages/BrowsePublicHabits";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <NotFound></NotFound>,

        hydrateFallbackElement: <p>Loading...</p>,

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
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            }
        ]
    }
])

export default router