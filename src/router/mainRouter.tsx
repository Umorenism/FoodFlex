import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../static/Layout";
import { HomeScreen } from "../page/HomeScreen";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            }
        ]
    }
])