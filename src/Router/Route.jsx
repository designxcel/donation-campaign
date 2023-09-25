import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donations from "../Pages/Donations/Donations";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CardDetails from "../Pages/CardDetails/CardDetails";

const createRouter = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch('/donate.json')
            },
            {
                path : "/donations",
                element : <Donations></Donations>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path: "/cards/:id",
                element: <CardDetails></CardDetails>,
                loader : ()=> fetch('/donate.json')
            }
        ]
    }
])

export default createRouter;