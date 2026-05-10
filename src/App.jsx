/*importar el hook useState desde React. sirve para manejar estado dentro de un componente.*/ 
import { useState } from 'react'
import cenfoLogo from "./assets/logocenfo.png"
import evento from "./assets/evento.webp"
import './App.css'

/*importacion de los componentes encabezado/pie de pagina/menu/botones*/
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Boton from "./components/Boton"
import Eventos from "./components/Eventos"


function App() {
  return (     
    /*sirve para envolver múltiples elementos JSX sin crear etiquetas HTML adicionales.*/
    <>
     {/* carga del componente encabezado */}
      <Header />
     {/* carga del componente menu */}
      <Navbar />


  {/* inicio zona principal  */}
  <main className="container my-4">

 
    {/* seccion1 */}
    
      <section id="nosotros" className="row my-5">
        <h2 className="tp2 text-center my-5">Empresa XYZ</h2>
              <p className="text-start">
                  Una empresa de eventos se especializa en la planificación, organización y ejecución de experiencias memorables 
                  para todo tipo de ocasiones, como eventos corporativos, sociales y culturales. Su labor abarca desde el diseño creativo del concepto 
                  hasta la coordinación logística, incluyendo la selección del lugar, la ambientación, el manejo de proveedores, la producción técnica y 
                  la atención a los asistentes. Gracias a un equipo profesional y a una gestión eficiente del tiempo y los recursos, una empresa de eventos 
                  garantiza que cada detalle se alinee con los objetivos del cliente, ofreciendo eventos personalizados que generan impacto, fortalecen la imagen 
                  de marca y crean momentos significativos para los participantes.
                </p>
              <div className="text-center my-5">                
                <img src={evento} alt="empresa de eventos variados" className="img-fluid img-thumbnail"/>                
              </div>
              
              {/*componente Eventos*/}
              <Eventos />


             </section>
        
                     

    {/* seccion2 */}
    
          <section id="descripciones" className="row my-5">
            <h2 className="tp2 text-center my-5">Descripciones</h2>
          <div className="col-md-6 col-lg-4 mb-3 my-5">
            <div className="card p-3">
              <h3 className="tp3">Definición 1</h3>
              <p>React es una biblioteca de JavaScript de código abierto, creada por Facebook, para construir interfaces de usuario (UI) interactivas y eficientes, 
                permitiendo crear componentes reutilizables para aplicaciones web, móviles y de realidad virtual.</p>
            </div>
            <div className="text-center my-3 ratio ratio-16x9">
              <iframe width="360" height="280" src="https://www.youtube.com/embed/KgdDQGSL0qs?si=Eml-MriTDweenOBo" title="Evento1" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3 my-5">
            <div className="card p-3">
              <h3 className="tp3">Definición 2</h3>
              <p>React es una biblioteca de JavaScript de código abierto, creada por Facebook, para construir interfaces de usuario (UI) interactivas y eficientes, 
                permitiendo crear componentes reutilizables para aplicaciones web, móviles y de realidad virtual.</p>
            </div>
            <div className="text-center my-3 ratio ratio-16x9">
              <iframe width="360" height="280" src="https://www.youtube.com/embed/lh4lzwwNiTc?si=7yt46ZYgp3Vg13SE" title="Evento2" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen></iframe>
          </div>

          </div>

          <div className="col-md-6 col-lg-4 mb-3 my-5">
            <div className="card p-3">
              <h3 className="tp3">Definición 3</h3>
              <p>React es una biblioteca de JavaScript de código abierto, creada por Facebook, para construir interfaces de usuario (UI) interactivas y eficientes, 
                permitiendo crear componentes reutilizables para aplicaciones web, móviles y de realidad virtual.</p>
            </div>
            <div className="text-center my-3 ratio ratio-16x9">
              <iframe width="360" height="280" src="https://www.youtube.com/embed/3cm44c360C0?si=kgJLkzQaqhAu3GBN" title="Evento3" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
            </div>
          </div>
     </section>
        
        
    

  {/* seccion3  */}

   <section id="eventos" className="row my-5">
    <h2 className="tp2 text-center my-5">Eventos especiales</h2>
      <div className="col-md-6 col-lg-6 p-3">
       <h3 className="tp3"><i className="uil uil-sun"></i>Evento musical</h3>
        <p>
          Un evento musical es una experiencia artística y cultural que reúne a músicos, bandas o artistas con el objetivo de entretener, emocionar y 
          conectar con el público a través de la música.
        </p>
     </div>
    <div className="col-md-6 col-lg-6 p-3">
         <h3 className="tp3"><i className="uil uil-moon"></i>Evento cumpleaños</h3>
          <p>
          Un evento de cumpleaños es una celebración especial diseñada para conmemorar una fecha significativa y compartir momentos de alegría con familiares y amigos.
        </p>
    </div>
    

  {/* cierre fila*/}
    </section>

  {/* cierre zona principal  */}
   </main>

  {/* carga del componente pie de pagina  */}
      <Footer />
    </>
  )
}

export default App

