import {useCallback, useEffect, useState} from "react";
import {ShowIncrement} from "./ShowIncrement.jsx";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback((num = 0) => {
        // console.log(num)
        setCounter((value) => value + num);
    }, []);

    // useEffect(() => {
    //     incrementFather()
    // }, [incrementFather]);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={incrementFather}/>
        </>
    );
};