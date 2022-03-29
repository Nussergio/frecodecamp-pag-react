import React from 'react';
import '../style-sheet/testimonios.css';


function Testimonio (props){
  return(
    <div className='Contenedor-testimonios'>
      <img className='imagen-testimonio' src={ require (`../imagenes/testimonio-${props.imagen}.png`)}
      alt='foto de Shawn'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} Wang in {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} at {props.empresa}</p>
        <p className='texto-testimonio'>"{props.texto}"</p>
      </div>
    </div>
  );
}
export default Testimonio;

