import React from "react";

export const ShowIncrement = React.memo(({increment}) => {
    console.log("Me volvía renderizar! :/")
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(1);
            }}
        >
            Incrementar
        </button>
    );
});