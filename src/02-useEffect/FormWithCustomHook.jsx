import useForm from "../hooks/useForm.js";

const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    return (
        <>
            <h1>Form With Custom Hook!</h1>
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
            <input
                type="password"
                className="form-control my-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-warning">Reset Form!</button>
        </>
    );
};

export default FormWithCustomHook;