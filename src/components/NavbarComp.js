import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    //     <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{minHeight:106, fontSize:20}}>
    //         <div className="container">
    //             <Link to="/" className="navbar-brand" style={{fontSize:32}}>MyDietDiary</Link>
    //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //             <div className="navbar-nav ms-auto">
    //                 <Link to="/" className="nav-link">BERANDA</Link>
    //                 <Link to="/article" className="nav-link">ARTIKEL</Link>
    //                 <Link to="/produk" className='nav-link'>PRODUK</Link>
    //                 <Link to="/analisis" className='nav-link'>ANALISIS</Link>
    //                 <Link to="/admin" className='nav-link'>KONTAK</Link>
    //             </div>
    //             </div>
    //         </div>
    //     </nav>
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">My DietDiary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">BERANDA</Link>
            <Link to="/artikel" className="nav-link">ARTIKEL</Link>
            <Link to="/produk" className='nav-link'>PRODUK</Link>
            <Link to="/analisis" className='nav-link'>ANALISIS</Link>
            <Link to="/admin" className='nav-link'>KONTAK</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
