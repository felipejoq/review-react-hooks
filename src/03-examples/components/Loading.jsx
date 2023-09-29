const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="">
                Cargando...
            </div>
        </div>
    );
};

export default Loading;