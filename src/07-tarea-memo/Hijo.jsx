import React from 'react'

export const Hijo = React.memo(({number, incrementar}) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => incrementar(number)}
        >
            {number}
        </button>
    )
})
