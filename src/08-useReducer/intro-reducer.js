
// El reducer necesita un estado inicial.
const initialState = [{
    id: 1, todo: 'Avanzar en el curso de react.js', done: false
}];

// Reducer es una función donde se recibe el estado actual y una acción que tiene type y payload.
const todoReducer = (state = initialState, action = {}) => {

    // Funciona con if o también con switches
    if (action.type === "[TODO] add todo") {
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comer el almuerzo',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

// El reducer es el encargado siempre de modificar el estado y regresarlo.

console.log(todos);