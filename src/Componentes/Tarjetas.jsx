import React from 'react'


const Tarjetas = ({ ruta, titulo, description }) => {
    return (
        <>
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src={ruta}
                        className="card-img-top"
                        alt="..."
                        title="card title" />
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        </>
    )
}

export default Tarjetas
