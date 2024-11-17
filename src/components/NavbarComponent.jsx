import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComponent = ({ params }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">{params.brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav className="navButton" href="#home">Inicio</Nav>
                <Nav className="navButton" href="#link">Productos</Nav>
                <Nav className="navButton" href="#link">Favoritos</Nav>
                <Nav className="navButton" href="#link">Mis compras</Nav>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Deportes</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Ropa</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Literatura</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav.Link href="#link"><CartWidget params={{ counter: 2 }}/></Nav.Link>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
