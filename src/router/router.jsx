import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../RootLayout/RootLayout";
import NotFound from "../Pages/NotFound";
import AddHabit from "../Pages/AddHabit";
import MyHabits from "../Pages/MyHabits";
import BrowsePublicHabits from "../Pages/BrowsePublicHabits";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRouter from "./PrivateRouter";
import HabitDetails from "../Pages/HabitDetails";
import UpdateHabit from "../Pages/UpdateHabit";
// import PageLoader from "../Pages/PageLoader";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <NotFound></NotFound>,

        // hydrateFallbackElement: <PageLoader></PageLoader>,

        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-habit',
                element: <PrivateRouter>
                    <AddHabit></AddHabit>
                </PrivateRouter>
            },
            {
                path: '/my-habit',
                element: <PrivateRouter>
                    <MyHabits></MyHabits>
                </PrivateRouter>
            },
            {
                path: '/update-habit',
                element: <PrivateRouter>
                    <UpdateHabit></UpdateHabit>
                </PrivateRouter>
            },
            {
                path: '/browse-public-habits',
                element: <BrowsePublicHabits></BrowsePublicHabits>
            },
            {
                path: '/habit-details',
                element: <PrivateRouter>
                    <HabitDetails></HabitDetails>
                </PrivateRouter>
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