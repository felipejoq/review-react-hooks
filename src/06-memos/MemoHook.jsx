import useCounter from "../hooks/useCounter.js";
import {useMemo, useState} from "react";

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Vamos!');
    }
    return `${iterationNumber} iteraciones realizadas.`;
}

export const MemoHook = () => {
    const {counter, addValue} = useCounter(4000);
    const [show, setShow] = useState(true);

    // Memoriza un valor o resultado de una función que requiera un alto procesamiento.
    const memorizeValue = useMemo(() => {
        return heavyStuff(counter);
    }, [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr/>

            <h4>{memorizeValue}</h4>

            <button onClick={() => addValue(1)} className="btn btn-primary">
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show / Hide {JSON.stringify(show)}
            </button>
        </>
    );
};