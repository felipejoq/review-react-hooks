// import {memo} from "react";
import React from "react";


export const Small = React.memo(({value}) => {
    console.log('RE-RENDER! :/');

    return (
        <small>{value}</small>
    );
});