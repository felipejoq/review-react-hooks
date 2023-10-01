export const TodoItem = ({todo = {}, onDeleteTodo, onToggleTodo}) => {

    const {id, description, done} = todo;

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                onClick={() => onToggleTodo(id)}
                className={`align-self-center ${(done) ? 'text-decoration-line-through' : ''}`}
            >
                {description}
            </span>
            <button
                className="btn btn-warning"
                onClick={() => onDeleteTodo(id)}
            >Borrar
            </button>
        </li>
    );
};