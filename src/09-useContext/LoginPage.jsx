import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const LoginPage = () => {

    const {user, loginUser} = useContext(UserContext);


    const setLoginUser = () => {
        loginUser({
            id: 123,
            name: 'Felipe',
            email: 'felipe@test.test'
        });
    }

    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>

            <button
                onClick={setLoginUser}
                className="btn btn-primary">
                Establecer usuario
            </button>
        </>
    );
};