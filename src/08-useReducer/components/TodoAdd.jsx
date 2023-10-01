import useForm from "../../hooks/useForm.js";

export const TodoAdd = ({onNewTodo}) => {

    const {formState, onInputChange, onResetForm } = useForm({ description: ''})

    const {description} = formState;

    const formAddTodo = (event) => {
        event.preventDefault();
        if (description === '') return;
        const newTodo = {
            id: Date.now(),
            done: false,
            description
        }
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={formAddTodo}>
            <input
                type="text"
                placeholder="Añadir tarea..."
                className="form-control my-2"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-primary my-2">
                Agregar
            </button>
        </form>
    );
};