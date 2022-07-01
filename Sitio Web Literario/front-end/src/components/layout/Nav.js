import {Link} from "react-router-dom"
// si queremos la clase "activo" importar NavLink.

const Navegador = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to ="/">PRINCIPAL</Link></li>
                <li><Link to="/episodios">EPISODIOS</Link></li>
                <li><Link to="/recomendaciones">RECOMENDACIONES</Link></li>
                <li><Link to="/fechas">FECHAS</Link></li>
                <li><Link to="/contacto">CONTACTO</Link></li>
            </ul>
        </nav>
    );
}

export default Navegador;
