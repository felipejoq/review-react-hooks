import {TodoList} from "./components/TodoList.jsx";
import {TodoAdd} from "./components/TodoAdd.jsx";
import {useTodos} from "./hooks/useTodos.js";

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, onToggleTodo, handleNewTodo} = useTodos();

    return (
        <>
            <h1>To-Do App ({todosCount}), <small>Pendientes: {pendingTodosCount}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar to-do</h4>
                    <hr/>
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    );
};