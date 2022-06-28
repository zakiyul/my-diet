/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaNewspaper, FaBox, FaBorderAll } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainSide = () => {
    return ( 
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
            <img src="https://pbs.twimg.com/profile_images/1405160563072638978/j5QQXXn__400x400.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">MyDietDiary</span>
        </a>
        <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src="https://pbs.twimg.com/profile_images/1405160563072638978/j5QQXXn__400x400.jpg" className="img-circle elevation-2" alt="kucing" />
            </div>
            <div className="info">
                <Link to="/" target="_blank" className='d-block'>Kocheng oren</Link>
            </div>
        </div>
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library */}
            {/* <li class="nav-item menu-open">
                <a class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Dashboard
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul className="nav nav-treeview">
                <li className="nav-item">
                    <Link to="/admin" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard</p>
                    </Link>
                </li>
                </ul>
            </li> */}
            <li className="nav-header">Master</li>
            <li className="nav-item">
                <Link to="/admin" className='nav-link'>
                    <FaBorderAll className='nav-icon' />
                    <p>
                        Dashboard
                    </p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/product" className="nav-link">
                    <FaBox className='nav-icon' />
                    <p>
                        Product
                    </p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/article" className="nav-link">
                    <FaNewspaper className='nav-icon'/>
                    <p>
                        Article
                    </p>
                </Link>
            </li>
            </ul>
        </nav>
        </div>
    </aside>
     );
}
 
export default MainSide;