import CartWidget from "./CartWidget"

const NavbarComponent = ({params}) => {
    return (
        <nav className="navContainer">
            <div className="navBrand">{params.brand}</div>
            <button className="navButton"><a href="#" className="navLink">Inicio</a></button>
            <button className="navButton"><a href="#" className="navLink">Productos</a></button>
            <button className="navButton"><a href="#" className="navLink">Favoritos</a></button>
            <button className="navButton"><a href="#" className="navLink">Mis compras</a></button>
            <button className="navButton"><CartWidget params={{ counter: 2 }}/></button>
        </nav>
    )
}

export default NavbarComponent