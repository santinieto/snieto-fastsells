import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            margin: 'auto',
            width: '700px'
        }}>
            <img src="https://img.freepik.com/vector-gratis/pagina-error-404-distorsion_23-2148105404.jpg?semt=ais_hybrid" alt="Pagina no encontrada" className='notFoundImage' />
            <Link className='btn btn-dark' to={'/'}>Volver al inicio</Link>
        </div>
    )
}

export default Error