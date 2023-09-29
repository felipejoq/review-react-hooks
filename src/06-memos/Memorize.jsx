import useCounter from "../hooks/useCounter.js";
import {Small} from "./Small.jsx";
import {useState} from "react";

export const Memorize = () => {

    const {counter, addValue} = useCounter(0);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <hr/>
            <button onClick={() => addValue(1) } className="btn btn-primary">
                +1
            </button>

            <button
            className="btn btn-outline-primary"
            onClick={() => setShow(!show) }
            >
                Show / Hide { JSON.stringify(show) }
            </button>
        </>
    );
};