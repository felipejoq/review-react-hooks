import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter} from "react-router-dom";

import {MainApp} from "./09-useContext/MainApp.jsx";
// import {TodoApp} from "./08-useReducer/TodoApp.jsx";
// import {Padre} from "./07-tarea-memo/Padre.jsx";
// import {CallbackHook} from "./06-memos/CallbackHook.jsx";
// import {MemoHook} from "./06-memos/MemoHook.jsx";
// import {Memorize} from "./06-memos/Memorize.jsx";
// import Layout from "./05-useLayoutEffect/Layout.jsx";
// import {FocusScreen} from "./04-useRef/FocusScreen.jsx";
// import MultipleCustomHooks from "./03-examples/MultipleCustomHooks.jsx";
// import FormWithCustomHook from "./02-useEffect/FormWithCustomHook.jsx";
// import SimpleForm from "./02-useEffect/SimpleForm.jsx";
// import CounterWithCustomHook from "./01-useState/CounterWithCustomHook.jsx";
// import HooksApp from './HooksApp.jsx';
// import CounterApp from "./01-useState/CounterApp.jsx";

// import './08-useReducer/intro-reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/*<React.StrictMode>*/}
            <MainApp/>
        {/*</React.StrictMode>*/}
    </BrowserRouter>
)
