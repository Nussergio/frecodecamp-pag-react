import React from 'react';
import '../style-sheet/testimonios.css';


function Testimonio ({...props}){
  return(
    <div className='Contenedor-testimonios'>
      <img className='imagen-testimonio' src={ require (`../imagenes/testimonio-${imagen}.png`)}
      alt='foto de Shawn'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{nombre} Wang in {pais}</p>
        <p className='cargo-testimonio'>{cargo} at {empresa}</p>
        <p className='texto-testimonio'>"{texto}"</p>
      </div>
    </div>
  );
}
export default Testimonio;

