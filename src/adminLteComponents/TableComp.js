import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const TableComp = ({ data }) => {
  const { handleShow } = useContext(ProductContext);

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
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.nama}</td>
                  <td>
                    <button className="btn btn-primary">Update</button>
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