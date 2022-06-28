import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from '../logo.png';

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" width={50} />
            <strong>MyDietDiary</strong>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Beranda
            </Link>
            <Link to="/artikel" className="nav-link">
              Artikel
            </Link>
            <Link to="/produk" className="nav-link">
              Produk
            </Link>
            <Link to="/analisis" className="nav-link">
              Analisis
            </Link>
            <Link to="/admin" className="nav-link">
              Dashboard
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
