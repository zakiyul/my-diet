import { useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import config from '../global/config';
import { FaTrash, FaPen } from 'react-icons/fa';

import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const TableComp = ({ data }) => {
  const { handleShow } = useContext(ProductContext);
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${config.BASE_URL}/api/products/${id}`)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        window.location.reload(false);
      }
    })
  }

  return (
    <div className="card">
      <div className="card-header">
        <button onClick={handleShow} className="btn btn-primary">
          <i class="bi bi-plus"></i>
        </button>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Rating</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.nama}</td>
                  <td>Rp. {d.harga}</td>
                  <td>{d.rating}</td>
                  <td>
                      <img height='100px' src={`${config.BASE_URL}${d.image}`} alt={d.nama} />
                  </td>
                  <td>
                    <Link className="btn btn-primary" to={`edit/${d.id}`} ><FaPen/></Link>
                    <button className="btn btn-danger ms-3" onClick={() => handleDelete(d.id)}><FaTrash/></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComp;
