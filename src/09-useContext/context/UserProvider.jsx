import {UserContext} from "./UserContext.jsx";
import {useState} from "react";

// const user = {
//     id: 123,
//     name: 'Felipe',
//     email: 'felipe@test.test'
// }

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({});

    const loginUser = (user) => {
        setUser(user)
    }

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user }}>
        <UserContext.Provider value={{ hola: 'Mundo', user, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};