import React, { useState } from 'react'
import { usuarios } from '../base_de_datos/datos'
import Cards from './Cards'

const Search = () => {
  const [tarjetas, setTarjetas] = useState(usuarios);

  function setCards() {
    const buscador = document.getElementById('buscador').value;
    const resultado = tarjetas.filter(x => {
      if (x.nombre.toLocaleLowerCase().includes(buscador.toLocaleLowerCase()) || x.apellido.toLocaleLowerCase().includes(buscador.toLocaleLowerCase()) || x.profesion.toLocaleLowerCase().includes(buscador.toLocaleLowerCase())) {
        return x;
      }
    })
    if (buscador.length == 0) {
      setTarjetas(usuarios);
    } else {
      setTarjetas(resultado);
    }
  }

  return (
    <>
      <header>
        <h1>Buscador</h1>
        <input type="text" placeholder='Buscador' id='buscador' onChange={setCards} autoComplete='off' />
      </header>
      <main>
        {tarjetas.map((x, index) => {
          return (
            <Cards key={index} src={x.img} nombre={x.nombre} apellido={x.apellido} profesion={x.profesion} />
          )
        })}
      </main>

    </>

  )
}

export default Search