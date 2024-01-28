import { useContext } from "react"
import { Context } from "../dados/dados"


export default function Home(){

    const user = useContext(Context)
    console.log(user)

    return(
        <h1>Olá { user }</h1>
    )


}