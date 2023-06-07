import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import PortalProvider from "./components/context/portalContext";


const routes = createBrowserRouter([
    {
        path: "",
        element: <PortalProvider><App /></PortalProvider>,
        errorElement: <h1>seguro de lo que estas buscando</h1>
    }
])


export default function AppRouter() {
    return (
        <RouterProvider router={routes}>

        </RouterProvider>
    )
}