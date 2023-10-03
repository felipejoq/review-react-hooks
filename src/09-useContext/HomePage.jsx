import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const HomePage = () => {

    const {hola, user} = useContext(UserContext)

    return (
        <>
            <h1>HomePage</h1>
            <hr />
            <h2>Hola {hola}, {user?.name} 👨‍💻!</h2>
            <code>Desde el UserContext :)</code>
        </>
    );
};