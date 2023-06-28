import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <header >
            <nav>
                <div className='principal'>
                    <Link to={'/'} >
                        <h2>"Arrimos Morales"</h2>
                        <img src="../img/logoarrimo.jpg" alt="logo" />
                    </Link>

                    <div className='menu'>
                        <ul >
                            <li >
                                <NavLink to={'/'}>Todo Muebles</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/categoria/2"}> Arrimos </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/categoria/3"}> Estanterias </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/categoria/4"}> Mesas de Centro </NavLink>
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