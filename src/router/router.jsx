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
import UpdateHabit from "../Pages/UpdateHabit";
import PageLoader from "../Pages/PageLoader";
import PublicHabitDetails from "../Pages/PublicHabitDetails";
import HabitDetails from "../Pages/HabitDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <NotFound></NotFound>,

        hydrateFallbackElement: <PageLoader></PageLoader>,

        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/recent-habits'),
                hydrateFallbackElement: <PageLoader></PageLoader>
            },
            {
                path: '/add-habits',
                element: <PrivateRouter>
                    <AddHabit></AddHabit>
                </PrivateRouter>
            },
            {
                path: '/my-habits',
                element: <PrivateRouter>
                    <MyHabits></MyHabits>
                </PrivateRouter>
            },
            {
                path: '/update-habit/:id',
                element: (
                    <PrivateRouter>
                        <UpdateHabit></UpdateHabit>
                    </PrivateRouter>
                ),
                loader: ({ params }) => fetch(`http://localhost:3000/habits/${params.id}`)
            },
            {
                path: '/browse-public-habits',
                element: <BrowsePublicHabits></BrowsePublicHabits>,
                loader: () => fetch('http://localhost:3000/public-habits')
            },
            {
                path: '/publicHabit-details/:id',
                element: (
                    <PrivateRouter>
                        <PublicHabitDetails></PublicHabitDetails>
                    </PrivateRouter>
                ),
                loader: ({ params }) => fetch(`http://localhost:3000/public-habits/${params.id}`)
            },
            {
                path: '/habit-details/:id',
                element: (
                    <PrivateRouter>
                        <HabitDetails></HabitDetails>
                    </PrivateRouter>
                ),
                loader: ({ params }) => fetch(`http://localhost:3000/recent-habits/${params.id}`)
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