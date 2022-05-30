import { Link } from 'react-router-dom';

const NavbarComp = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{minHeight:106, fontSize:20}}>
            <div className="container">
                <Link to="/" className="navbar-brand" style={{fontSize:32}}>MyDietDiary</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link to="/" className="nav-link">BERANDA</Link>
                    <Link to="/add-cara-pakai" className="nav-link">ARTIKEL</Link>
                    <Link to="/produk" className='nav-link'>PRODUK</Link>
                    <Link to="/analisis" className='nav-link'>ANALISIS</Link>
                    <Link to="/admin" className='nav-link'>KONTAK</Link>
                </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavbarComp;