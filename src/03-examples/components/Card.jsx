import {useLayoutEffect, useRef} from "react";

const Card = ({title, img, onNext}) => {

    const cardRef = useRef();

    useLayoutEffect(() => {

        // Se ejecuta cuando ya el componente está construido.
        console.log(cardRef.current.getBoundingClientRect())

    }, []);

    return (
        <div
            className="card"
            style={{
                width: "18rem",
            }}
            ref={cardRef}
        >
            <img src={img} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <button onClick={() => onNext(1)} className="btn btn-primary">
                    Next!
                </button>
            </div>
        </div>
    );
};

export default Card;

