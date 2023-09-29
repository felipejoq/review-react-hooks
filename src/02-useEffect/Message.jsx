import {useEffect} from "react";

const Message = () => {

    useEffect(() => {
        // console.log('Message component mounted!');
        const onMouseMove = ({x, y}) => {
            console.log({x, y});
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            // console.log('Message component unmounted!');
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);


    return (
        <>
            <h3>Usuario ya existe!</h3>
        </>
    );
};

export default Message;