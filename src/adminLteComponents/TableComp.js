const TableComp = ({data}) => {
    return ( 
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Bordered Table</h3>
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
                                    <td>{d.title}</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default TableComp;