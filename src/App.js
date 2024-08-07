import React, { useEffect, useState } from 'react';
import './App.css';

export default function App(){
  const  [ nutri , setNutri ] = useState([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((r) => r.json()) //Conversão para arquivo json (forçar o arquivo ser json)
    .then((json) => {
      setNutri(json)
    })
  }, []);

  return (
    <div>
      <header>
        <strong>React Nutri</strong>
      </header>

      <div>
        {nutri.map((item)=>{
          return(
            <article key={item.id}>
              <strong>{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo}></img>
              <p>{item.paragrafo}</p>
              <span>{item.categoria}</span>
            </article>
          );
        })}
      </div>
    </div>
  );
}