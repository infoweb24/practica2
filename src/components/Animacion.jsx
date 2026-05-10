
import Lottie from "lottie-react";
import animacion1 from "../assets/welcome.json";


/*componente llamado Animacion*/
function Animacion() {
  return (   
    <div className="centrado" style={{ width: 320 }}>
        {/*<Lottie /> es un componente que reproduce animaciones JSON
        animationData={animacion1} le pasa el archivo JSON de la animación
        loop={true}: hace que la animación se repita continuamente*/}
      <Lottie animationData={animacion1} loop={true} />
    </div>
  );
}

/*exportar el componente Animacion*/ 
export default Animacion;