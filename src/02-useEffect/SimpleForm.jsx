import {useEffect, useState} from "react";
import Message from "./Message.jsx";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Felipe',
        email: 'felipe@uncodigo.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState Changed 🚀!');
    }, [formState]);

    useEffect(() => {
        // console.log('email Changed 📧!');
    }, [email]);

    return (
        <>
            <h1>Simple Form!</h1>
            <hr/>
            <input
                type="text"
                className="form-control my-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control my-2"
                placeholder="email@example.test"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'Felipe2') && <Message/>
            }
        </>
    );
};

export default SimpleForm;