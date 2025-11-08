import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "./NotFound";
import Home from "./Home";
import Participantes, { loaderParticipantes } from "./Participantes";
import Participante, { loaderParticipante } from "./Participante";
import Registro from "./Registro";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />, 
    },
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                path: "participantes",
                element: <Participantes />,
                loader: loaderParticipantes
            },
            {
                path: "participante/:id",
                element: <Participante />,
                loader: loaderParticipante
            },
            {
                path: "registro",
                element: <Registro />
            }
        ]
    }
])