/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { logoutUser } = useContext(AuthContext);
  const handleLogout = e => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Logout From Admin Dashboard",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser()
        Swal.fire(
          'Logout!',
          'You have been logout from admin dashboard.',
          'success'
        )
      }
    })
  }
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to='/login' className='nav-link' onClick={handleLogout}>
            Logout
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="fullscreen"
            href="#"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
