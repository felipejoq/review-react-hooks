import useCounter from "../hooks/useCounter.js";

const CounterWithCustomHook = () => {


    const {counter, addValue, resetValue, subValue} = useCounter(0)

    return (
        <>
            <h1>Counter With Custom Hook: {counter}</h1>
            <hr/>
            <button
                onClick={() => addValue(1)}
                className={"btn btn-success"}>+1
            </button>
            <button
                onClick={() => resetValue(0)}
                className={"btn btn-warning"}>Reset
            </button>
            <button
                onClick={() => subValue(1)}
                className={"btn btn-primary"}>-1
            </button>
        </>
    );
};

export default CounterWithCustomHook;