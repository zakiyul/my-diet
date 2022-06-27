import { useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
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
        axios.delete(`http://localhost:8000/api/articles/${id}`)
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
              <th>Image</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((d) => {
              return (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.link}</td>
                  <td>
                      <img height='100px' src={`http://localhost:8000${d.image}`} alt={d.title} />
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
