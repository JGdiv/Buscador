export default App
import './app.css'
import Search from './components/Search'

// declaracion de variables
var fechaActual;
const dia = (fechaActual = new Date()).getDay();
const mes = (fechaActual = new Date()).getMonth();
let meses = ['Enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const mesString = meses[mes]
const year = (fechaActual = new Date()).getFullYear();
fechaActual == fechaActual;

//fin de declaracion de variables







//fin de constructores

function App() {
    return (
        <>
        <Search/>
        </>
    )
}

