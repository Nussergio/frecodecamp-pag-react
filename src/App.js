import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/testimonios'

function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      <Testimonio
        nombre='Shawn Wang'
        pais='Singapore'
        empresa='Amazon'
        cargo='Software Engineer'
        imagen='Shawn'
        texto="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />
      <Testimonio
        nombre='Sarah Chima'
        pais='Singapore'
        empresa='Amazon'
        cargo='Software Engineer'
        imagen='Sarah'
        texto="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      />
      <Testimonio
        nombre='Emma Bostian'
        pais='Sweden'
        empresa='Spotify'
        cargo='Software Engineer'
        imagen='Emma'
        texto="freeCI've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.odeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />
    </div>
    </div>
  );
}

export default App;
