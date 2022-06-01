import {useNavigate} from 'react-router-dom';
const AddCategoryFrom = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = event.target;
    const {name, description} = values;
    const categoryData = {
      name: name.value,
      description: description.value,
    };
    console.log(categoryData);
  };

  return (
    <>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex align-items-center justify-content-between">
                  <div class="d-flex justify-content-between">
                    <h4 class="card-title d-inline-block">Add Category</h4>
                  </div>
                  <div>
                    <a
                      onClick={() => navigate('/category-list')}
                      className="btn btn-primary add-list text-white pull-right"
                    >
                      Category List
                    </a>
                  </div>
                </div>
                <div class="card-body">
                  <form
                    onSubmit={handleSubmit}
                    data-toggle="validator"
                    name="categoryForm"
                  >
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Name *</label>
                          <input
                            name="name"
                            type="text"
                            class="form-control"
                            placeholder="Enter Name"
                            required
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Description</label>
                          <textarea
                            name="description"
                            class="form-control"
                            placeholder="Enter Description"
                            required
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add Category
                    </button>
                    <button type="reset" class="btn btn-danger">
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddCategoryFrom;
