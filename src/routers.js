import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/home";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
            </Routes>
        </BrowserRouter>
    )
}