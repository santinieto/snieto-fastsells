import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const NavbarComponent = ({ params }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">{params.brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav as={NavLink} className="navButton" to="/">Inicio</Nav>
                <Nav as={NavLink} className="navButton" to="/products">Productos</Nav>
                <Nav as={NavLink} className="navButton" to="/favorites">Favoritos</Nav>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="products/sports">Deportes</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="products/clothes">Ropa</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="products/books">Literatura</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to="products/others">Otros</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav as={NavLink} to="/cart"><CartWidget /></Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
