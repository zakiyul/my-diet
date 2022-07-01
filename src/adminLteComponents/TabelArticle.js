import { useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import config from '../global/config';
import { FaTrash, FaPen } from 'react-icons/fa';

import { ArticleContext } from '../context/ArticleContext';

const TableComp = () => {
  const { articles, handleShow, handleShowEditArticle, setArticleId } = useContext(ArticleContext);
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
        axios.delete(`${config.BASE_URL}/api/articles/${id}`)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
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
              <th>Judul</th>
              <th>Link</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((d) => {
              return (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.title.slice(0, 150)}</td>
                  <td>{d.link.slice(0, 50)}</td>
                  <td>
                      <img height='100px' src={`${config.BASE_URL}/${d.image}`} alt={d.title} />
                  </td>
                  <td>
                    <button className="btn btn-primary" onClick={() => {
                        handleShowEditArticle()
                        setArticleId(d.id)
                      }}><FaPen/></button>
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
