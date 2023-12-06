import React, { useEffect, useState } from 'react'
import Tarjetas from '../Tarjetas'
import "./contenedortarjetas.css"
import axios from 'axios'


const ContenedorTarjetas = () => {
  const [datos, setDatos] = useState([])
  const ts = 2;
  const key = "4237ee68ee056457e5fd36d043518038"
  const hash = "16782395e7439f746fdf0e980a4ccb9f"
  const categoria = "comics"
  const url = `http://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        console.log(respuesta);
        setDatos(respuesta.data.data.results);
      } catch (error) {
        console.log("hubo un error: ", error);
      }
    };
    solicitud();
  }, []);


  return (
    <>
      <main className="contenedor">
        {/* <Tarjetas
          ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/8/60/6553cca0c0c41/detail.jpg"
          titulo="card title"
          description="Soy una descripcion"
        />
        <Tarjetas
          ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/8/60/6553cca0c0c41/detail.jpg"
          titulo="card title"
          description="Soy una descripcion"
        />
        <Tarjetas
          ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/8/60/6553cca0c0c41/detail.jpg"
          titulo="card title"
          description="Soy una descripcion"
        />
        <Tarjetas
          ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/8/60/6553cca0c0c41/detail.jpg"
          titulo="card title"
          description="Soy una descripcion"
        /> */}
      
      {datos.map((item)=>(
        <Tarjetas
        key={item.id}
        ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
        titulo={item.title}
        description={item.description}
        />
        ))}
      </main>

    </>
  )
}

export default ContenedorTarjetas
