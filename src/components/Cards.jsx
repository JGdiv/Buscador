import React from 'react'

const Cards = ({ nombre, apellido, profesion, src }) => {
    return (
        <div className='cards'>
            <img src={src} alt="" />

            <div className='nombre_apellido'>
                <i>{nombre}</i>
                <i>{apellido}</i>
            </div>
            <div className='profesion'>{profesion}</div>
        </div>

    )
}

export default Cards