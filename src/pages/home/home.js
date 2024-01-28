import { useContext } from "react";
import Dados, { Context } from "../dados/dados";

export default function Home(){

    const { user } = useContext(Context)

    return(
        <Dados>
            <h1>Olá {user}</h1>
        </Dados>
    )
}