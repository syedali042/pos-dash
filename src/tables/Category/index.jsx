import {useNavigate} from 'react-router-dom';
const CategoryTable = () => {
  const navigate = useNavigate();
  return (
    <div className="content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
              <div>
                <h4 className="mb-3">Category List</h4>
              </div>
              <a
                onClick={() => navigate('/create-new-category')}
                className="btn btn-primary add-list text-white"
              >
                Add Category
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="table-responsive rounded mb-3">
              <table className="data-table table mb-0 tbl-server-info">
                <thead className="bg-white text-uppercase">
                  <tr className="ligth ligth-data">
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="ligth-body">
                  <tr>
                    <td>Noodles</td>
                    <td>500g</td>
                    <td>Active</td>
                    <td>
                      <div className="d-flex align-items-center list-action">
                        <a
                          className="badge bg-success mr-2"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Edit"
                          href="#"
                        >
                          <i className="ri-pencil-line mr-0"></i>
                        </a>
                        <a
                          className="badge bg-warning mr-2"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Delete"
                          href="#"
                        >
                          <i className="ri-delete-bin-line mr-0"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryTable;
