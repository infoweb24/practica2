import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*carga de Bootstrap*/ 
import 'bootstrap/dist/css/bootstrap.min.css';

/*carga interactividad menu hamburguesa/popper */
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/*carga de iconos web*/ 
import 'bootstrap-icons/font/bootstrap-icons.css'


/*en el index.html está el <div id="root">*/
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
