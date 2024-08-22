export default App
import './app.css'
// declaracion de variables
var fechaActual;
const dia = (fechaActual = new Date()).getDay();
const mes = (fechaActual = new Date()).getMonth();
let meses = ['Enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const mesString = meses[mes]
const year = (fechaActual = new Date()).getFullYear();
fechaActual == fechaActual;

//fin de declaracion de variables
//constructores


const Header = (titulo, usuario) => {
    return (<header className='encabezado'>
        <div className='fecha'>{dia} {mesString} del {year} </div>
        <h1>{titulo}</h1>
        <div className='nameUsuario'>{usuario} </div>
    </header>)
}




//fin de constructores

function App() {
    return (Header('Buscador', 'Jesus Garcia')





    )
}

