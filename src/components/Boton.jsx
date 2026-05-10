// definir el componente boton hijo y se reciben 3 propiedades por parametros (props en React)
// icon = icono que mostrara el boton
// title = texto que mostrará el boton
// link = dirección web que se abrirá al hacer clic al boton
function Boton({icon, title, link }) {

//definir una función que se ejecuta cuando el usuario hace clic
  const abrirLink = () => {
    window.open(link, "_blank");
  };

  return (
    //crear el botón HTML
    <button 
     //se aplican los estilos definidos en el objeto styles
      style={styles.button}
      //cuando el usuario hace clic se ejecuta la función abrirLink
      onClick={abrirLink}
    >   
    {/*se muestra el texto que viene en la variable title y el icono de Bootstrap*/}    
      <i className={icon}></i>  
      {title}
    </button>
  );
}

//crear un objeto llamado styles que contiene los estilos de los botones
const styles = {
 button: {
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'Manjari, sans-serif',
    borderRadius: '20px',
    fontSize: '24px',
    backgroundColor: 'rgb(28, 72, 130)',    
    color: '#fff',
    margin: '0 auto',
    padding: '15px',
    //icono + texto
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  }
};


//exportar el componente para poder usarlo en otros archivos
export default Boton;
