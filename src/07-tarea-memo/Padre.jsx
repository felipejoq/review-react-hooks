import { Hijo } from './Hijo.jsx'
import {useCallback, useState} from 'react';

export const Padre = () => {

    const numbers = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback((num) => {
        setValor( (value) => value + num );
    }, []);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numbers.map( n => (
                    <Hijo 
                        key={ n }
                        number={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
