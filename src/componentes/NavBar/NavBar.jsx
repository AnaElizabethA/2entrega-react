import CartWidget from '../CartWidget/CartWidget'
import { Link, Navlink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to={'/'} >
                        <h2>"Arrimos Morales"</h2>
                        <img src="../img/logoarrimo.jpg" alt="logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Navlink to={'/'}>Todo Muebles</Navlink>
                            </li>
                            <li>
                                <NavLink to={"/categoria/2"}> Arrimos </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/categoria/2"}> Estanterias </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/categoria/2"}> Mesas de Centro </NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>


    )
}

export default NavBar