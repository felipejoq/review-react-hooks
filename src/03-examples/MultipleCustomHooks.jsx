import useFetch from "../hooks/useFetch.js";
import useCounter from "../hooks/useCounter.js";
import Loading from "./components/Loading.jsx";
import Card from "./components/Card.jsx";

const MultipleCustomHooks = () => {
    const {counter, addValue} = useCounter(1)
    const url = `https://pokeapi.co/api/v2/pokemon/${counter}`
    const {data, isLoading, hasError} = useFetch(url);

    let name, img;
    if (!isLoading) {
        name = (data.name).toUpperCase();
        img = data["sprites"]["other"]["dream_world"]["front_default"];
    }

    return (
        <>
            <h1>PokeApi!</h1>
            <hr/>
            {
                (isLoading)
                    ? (<Loading/>)
                    : (<Card
                        img={img}
                        title={name}
                        onNext={addValue}/>)
            }
        </>
    );
};

export default MultipleCustomHooks;